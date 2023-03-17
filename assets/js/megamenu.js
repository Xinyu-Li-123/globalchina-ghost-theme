(function(){
    alert("load megamenu.js")
    const gh_head = $("#gh-head");
    const nav_items = $(".gh-head-menu .nav-item");
    
    // set z-index in reverse to the html code order,
    //      so that menu won't occlude dropdown
    nav_items.each(function(i, c) {
        $(c).css('z-index', nav_items.length-i);
    });

    // // make nav-link clickable, show/hide .dropdown-menu
    // nav_items.each(function(i, c) {
    //     $(".nav-link", c).click(function(e) {
    //         console.log("click")
    //         e.preventDefault();
    //         e.stopPropagation();
    //         // add or remove .show class to .dropdown-menu
    //         $(".dropdown-menu", c).toggleClass("show");
    //     });
    // })

    // inside hamburger menu, scroll to top on click

    // $(window).resize(function() {
    //     // alert("resize");

    //     $(".nav-item .dropdown-menu").width(
    //         $(".gh-head-menu").width()
    //     ).css({
    //         left: $(".gh-head-menu").offset().left
    //     })

        
    // }).resize();
})();