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
	$(window).on('resize', function() {
		if ($(window).width() > 767) {
		    $('.sidebar-offcanvas').removeClass('active');
		}
	});


	$('[data-toggle="offcanvas"]').click(function() {
		$('.sidebar-offcanvas').toggleClass('active');
	});

	// tag align when resize.

	var alignTag = function() {
		// add pull-right | remove pull-right
		if ($(window).width() < 767) {
			$('[data-nav="port-nav"]').removeClass('pull-right');
		} else {
			$('[data-nav="port-nav"]').addClass('pull-right');
		}
	};


	// function to show quote of the days.
	setInterval(function() {
		var quotes = [];
		quotes[0] = {name: 'Steve Jobb', texts: 'Don\'t be fear'};
		quotes[1] = {name: 'Jack Wagner', texts: 'Reality is the leading cause of stress for those in touch with it.'};
		quotes[2] = {name: 'Oscar Wilde', texts: 'The pure and simple truth is rarely pure and never simple.'};
		quotes[3] = {name: 'Lily Tomlin', texts: 'Man invented language to satisfy his deep need to complain.'};

		var i = Math.floor(Math.random() * quotes.length);

		return $('.quote-text').text(quotes[i].texts);
	}, 5000);

	alignTag();

});

	// function pie-chart
	
		var timer;
		var timerFinish;
		var timerSeconds;

		function drawTimer(c, a) {
			'use strict';
			$('#pie-' + c).html('<div id="slice"' + (a > 5 ? 'class="gt50"' : '') + '><div class="pie"></div>' + (a > 5 ? '<div class="pie fill"></div>' : '') + '</div>');
			var b = 360/10 * a;
			$('#pie-' + c + '#slice .pie').css({
				transform: 'rotate(' + b + 'deg)'
			});
		}

		function stopPie(d, b) {
			'use strict';
			var c = (timerFinish - (new Date().getTime())) / 1000;
			var a = 10 - ((c / timerSeconds) * 10);
			a = Math.floor(a * 100) / 100;
			if (a <= b) {
				drawTimer(d, a);
			}
		}


$(document).ready(function() {
	'use strict';
  timerSeconds = 3;
  timerFinish = new Date().getTime() + (timerSeconds * 1000);
  $('.pie-site').each(function(a) {
    var pie = $('#pie-' + a).data('pie');
    var ss = 'stopPie(' + a + ', ' + pie + ')';
    timer = setInterval(ss, 0);
  });
  stopPie();
});
