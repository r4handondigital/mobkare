$(document).ready(function(){

  /*$(".mn_sub").click(function(){
    $("a").toggleClass("ativado");
  });*/

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

/* ALIMENTAÇÃO */

function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
}

/* SOBRE */

function openSobre() {
  document.getElementById("mySidenavSobre").style.height = "100%";
}

function closeSobre() {
  document.getElementById("mySidenavSobre").style.height = "0";
}


/* PONTO DIGITAL */

function openPontodigital() {
  document.getElementById("mySidenavPonto").style.height = "100%";
}

function closePontodigital() {
  document.getElementById("mySidenavPonto").style.height = "0";
}