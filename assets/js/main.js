
(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);

$(document).ready(function(){
   
	var a = 0;
	
	$(window).scroll(function() {
	  var sections = $('section')
	  , nav = $('nav')
	  , nav_height = nav.outerHeight();
	 
	
	  var oTop = $('#counter').offset().top - window.innerHeight;
	  if (a == 0 && $(window).scrollTop() > oTop) {
		var cur_pos = $(this).scrollTop();
	 
		sections.each(function() {
		  var top = $(this).offset().top - nav_height,
			  bottom = top + $(this).outerHeight();
	   
		  if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			sections.removeClass('active');
	   
			$(this).addClass('active');
			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		  }
		});
		$('.counter-value').each(function() {
		  var $this = $(this),
			countTo = $this.attr('data-count');
		  $({
			countNum: $this.text()
		  }).animate({
			  countNum: countTo
			},
	
			{
	
			  duration: 2000,
			  easing: 'swing',
			  step: function() {
				$this.text(Math.floor(this.countNum));
			  },
			  complete: function() {
				$this.text(this.countNum);
				//alert('finished');
			  }
	
			});
		});
		a = 1;
	  }
	});
	   
	});
	
	
	