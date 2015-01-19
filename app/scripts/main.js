//************************//
//   Preloading script
//************************//

$(window).load(function() {
	'use strict';
    setTimeout(function() {
    $('.spinner').fadeOut('slow');
            
      setTimeout(function() {
      $('#preloader').fadeOut('slow'); 
            
      }, 700);    
          
    }, 700);  
       
});

//************************//
//   NavBar
//************************//

$("#toggle").on("click", function() {
	$(".row-offcanvas").toggleClass("active");
});