(function(){
    const gh_head = $("#gh-head");
    const nav_items = $(".gh-head-menu .nav-item");
    
    // set z-index in reverse to the html code order,
    //      so that menu won't occlude dropdown
    nav_items.each(function(i, c) {
        $(c).css('z-index', nav_items.length-i);
    });

    

})()