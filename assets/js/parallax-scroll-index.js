// (function(){
//     alert("Parallax Index!");
//     const siteMain = document.getElementById('site-main');

//     // Calculate the parallax effect as a percentage of the page scroll position
//     function calculateParallax() {
//         const scrollTop = window.pageYOffset;
//         const parallax = scrollTop * 0.3; // adjust this value to control the speed of the parallax effect
//         return `translateY(-${parallax}px)`;
//         }

//     // Update the site main content transform property on scroll
//     function updateParallax() {
//         siteMain.style.transform = calculateParallax();
//     }

//     // Add a scroll event listener to the window
//     window.addEventListener('scroll', updateParallax);
// })();