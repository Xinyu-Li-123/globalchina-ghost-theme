(function(){
    const puppeteer = require('puppeteer');
    const { createWriteStream } = require('fs');
    const { promisify } = require('util');
    const fetch = require('node-fetch');
    const { URL } = require('url');
    const path = require('path');

    const OUTPUT_DIR = 'pdfs';
    const POST_SLUG = 'my-post-slug';
    const API_URL = 'https://your-ghost-site.com/ghost/api/v3/content';
    const API_KEY = 'YOUR_CONTENT_API_KEY';

    async function generatePdf(postSlug) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Fetch the HTML content of the post using the Ghost Content API
        const url = new URL(`${API_URL}/posts/slug/${postSlug}/?key=${API_KEY}`);
        const response = await fetch(url);
        const { posts } = await response.json();
        const { html } = posts[0];

        // Generate a PDF file
        const pdfPath = path.join(OUTPUT_DIR, `${postSlug}.pdf`);
        const pdfStream = createWriteStream(pdfPath);
        await page.setContent(html);
        // await page.pdf({ format: 'A4', printBackground: true }).then((pdfBuffer) => {
        //     pdfStream.write(pdfBuffer);
        // });

        await page.pdf({ format: 'A4', printBackground: true }).then((pdfBuffer) => {
            pdfStream.write(pdfBuffer);
        });

        await browser.close();
        return pdfPath;
    }

    async function getPdfPath(postSlug) {
        // Fetch the last modified time of the post and the PDF file
        const postUrl = new URL(`${API_URL}/posts/slug/${postSlug}/?key=${API_KEY}`);
        const pdfUrl = new URL(`${API_URL}/assets/${postSlug}.pdf?key=${API_KEY}`);
        const postResponse = await fetch(postUrl);
        const pdfResponse = await fetch(pdfUrl);
        const postLastModified = new Date(postResponse.headers.get('Last-Modified'));
        const pdfLastModified = new Date(pdfResponse.headers.get('Last-Modified'));

        // Check if the PDF file exists and is up-to-date
        if (pdfResponse.ok && postLastModified <= pdfLastModified) {
            return pdfUrl.toString();
        } else {
            // Generate a new PDF file
            const pdfPath = await generatePdf(postSlug);

            // Upload the PDF file to Ghost CMS and update the post with the PDF file URL
            const pdfFilename = path.basename(pdfPath);
            const pdfUploadUrl = new URL(`${API_URL}/uploads/`);
            const formData = new FormData();
            formData.append('file', createReadStream(pdfPath), { contentType: 'application/pdf', name: pdfFilename });
            const uploadResponse = await fetch(pdfUploadUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Ghost ${API_KEY}`
                },
                body: formData
            });
            const { url: pdfUrl } = await uploadResponse.json();
            const postUpdateUrl = new URL(`${API_URL}/posts/slug/${postSlug}/?key=${API_KEY}`);
            const postUpdateResponse = await fetch(postUpdateUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Ghost ${API_KEY}`
                },
                body: JSON.stringify({
                    post: {
                        html: `<p>Download the <a href="${pdfUrl}">PDF version</a> of this post.</p>`
                    }
                })
            });
            return pdfUrl;
        }
    }

    // Get the URL of the PDF version of the post
    getPdfPath(POST_SLUG).then((pdfURL) => {
        console.log(`PDF URL: ${pdfURL}`);
        }).catch((error) => {
        console.error(error);
        });

})();