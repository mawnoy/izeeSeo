//************************//
//   Preloading script
//************************//

$(window).load(function() {
	'use strict';
    setTimeout(function() {
    $('.spinner').fadeOut('slow');
            
      setTimeout(function() {
      $('#prelaoder').fadeOut('slow'); 
            
      }, 700);    
          
    }, 700);  
       
});

