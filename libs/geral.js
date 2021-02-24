$(document).ready(function(){

   $('#example').DataTable( {
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        }
    } );
 
  $(".porfiltro").click(function(){
    $("#display-filtro").toggleClass("ativado");
  });

 $(".pordata").click(function(){
    $("#display-data").toggleClass("ativado");
  });

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


/* MENU */

function openNavMobile() {
  document.getElementById("menuMovMobile").style.width = "100%";
}

function closeNavMobile() {
  document.getElementById("menuMovMobile").style.width = "0";
}


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