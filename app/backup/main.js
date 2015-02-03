//************************//
//   Preloading script
//************************//

$(window).load(function() {
	'use strict';
    
// loading start page.    
    setTimeout(function() {
    $('.spinner').fadeOut('slow');
            
      setTimeout(function() {
      $('#preloader').fadeOut('slow'); 
            
      }, 700);    
          
    }, 700);  
       

// sidebar toggle

	var checkClass = function() {
		// add pull-right | remove pull-right
		if ($(window).width() < 767) {
			$('[data-nav="port-nav"]').removeClass('pull-right');
		} else {
			$('[data-nav="port-nav"]').addClass('pull-right');
		}
	};

	$(window).on('resize', function() {
		if ($(window).width() > 767) {
		    $('.sidebar-offcanvas').removeClass('active');
		}
	});

	checkClass();



	$('[data-toggle="offcanvas"]').click(function() {
		$('.sidebar-offcanvas').toggleClass('active');
	});

});