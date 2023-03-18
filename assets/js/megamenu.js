(function(){
    // alert("load megamenu.js")
    const gh_head = $("#gh-head");
    const gh_head_inner = $(".gh-head-inner");
    const gh_head_menu = $(".gh-head-menu");
    const nav_items = $(".gh-head-menu .nav-item");
    
    // set z-index in reverse to the html code order,
    //      so that menu won't occlude dropdown
    nav_items.each(function(i, c) {
        $(c).css('z-index', nav_items.length-i);
    });

    // // animation: slide down
    // nav_items.each(function(i, c) {
    //     $(".nav-link", c).click(function(e) {
    //         console.log("click")
    //         e.preventDefault();
    //         e.stopPropagation();
    //         // slide this one
    //         $(".dropdown-menu", c).slideToggle(200);
    //         // change nav-link background color
    //         $(".nav-link", c).toggleClass("active");
    //         // hide others without slide
    //         nav_items.not(c).each(function(i, c) {
    //             if ($(".dropdown-menu", c).is(":visible")) {
    //                 $(".dropdown-menu", c).hide();
    //             }
    //             if ($(".nav-link", c).hasClass("active")) {
    //                 $(".nav-link", c).removeClass("active");
    //             }
    //         });
    //     });
    // })

    // animation: fade in/out
    nav_items.each(function(i, c) {

        $(".nav-link", c).click(function(e) {
            e.preventDefault();
            e.stopPropagation();

            // // if max-width < 767px, then scroll to top of nav-link
            // if (gh_head.width() < 767) {
            //     $("html, body").animate({
            //         scrollTop: $(c).offset().top - 100
            //     }, 200);
            // }

            // slide this one
            $(".dropdown-menu", c).fadeToggle(200);
            
            // change nav-link background color
            $(".nav-link", c).toggleClass("active");
            // hide others without slide
            nav_items.not(c).each(function(i, c) {
                if ($(".dropdown-menu", c).is(":visible")) {
                    $(".dropdown-menu", c).hide();
                }
                if ($(".nav-link", c).hasClass("active")) {
                    $(".nav-link", c).removeClass("active");
                }
            });
        });
    });

    // set dropdown-menu width and position to align with gh-head-menu on resize
    $(window).resize(function() {
        // if max-width < 767px, then align to left
        if (window.matchMedia('(max-width: 767px)').matches) {
            // alert("less than 767")
            nav_items.each(function(i, c) {
                // align relative to gh-head-menu
                $(".dropdown-menu", c).css({
                    "width": "100%",
                    "left": 0,
                    "top": $(c).height(),
                });
            });
        }
        else {
            nav_items.each(function(i, c) {
                // align relative to gh-head-menu
                $(".dropdown-menu", c).css({
                    "width": gh_head_menu.width(),
                    "left": gh_head_menu.offset().left,
                    // including padding
                    "top": gh_head_menu.offset().top + $(c).height() + 2,
                });
            });

        }
        // alert(left_nav_item.offset().left - $(".gh-head-menu").offset().left - 20)
    }).resize();


})();