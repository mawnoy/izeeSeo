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

$(document).ready(function() {
	'use strict';
	
	$(window).on('resize', function() {
		if ($(window).width() > 767) {
		    $('.row-offcanvas').removeClass('active');
		}
	});

	$('[data-toggle="offcanvas"]').click(function() {
		$('.row-offcanvas').toggleClass('active');
	});
}); 