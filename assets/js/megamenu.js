(function(){
    alert("Hi from megamenu.js");
    const gh_head = $("#gh-head");
    const nav_items = $(".gh-head-menu .nav-item");
    nav_items.each(function(i, c) {
        $(c).css('z-index', nav_items.length-i);
    });
    alert(nav_items.length)

})()