$(document).ready(function(){



var nav = $('.topo');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

});
