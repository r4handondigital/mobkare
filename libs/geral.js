$(document).ready(function(){


	$('#data-modal').datepicker({
	    format: 'mm/dd/yyyy',
	    // startDate: '-3d'
	});

/*var nav = $('.topo');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });*/


    

});

function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
}