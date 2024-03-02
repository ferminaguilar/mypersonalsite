$(document).ready(function() {
	"use strict"; 
	try {
		
	/* ==========================================================================
	#PieChart For Skills Page
	========================================================================== */
	
	$('.chart').easyPieChart({
	easing: 'easeOutBounce',
	onStep: function(from, to, percent) {
	$(this.el).find('.percent').text(Math.round(percent));
	}
	});
	
	
	/* ==========================================================================
	#Carousel Popup For Portfolio Page
	========================================================================== */
	$(".owl-carousel").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoPlay: 3000
	});
	/* ==========================================================================
	#Text Rotator 
	========================================================================== */
	$('#rotate').rotaterator({fadeSpeed:800, pauseSpeed:800});

	/* ==========================================================================
	#Orientation change event
	========================================================================== */
	$(window).on('orientationchange', function(event) {
		window.location.href = window.location.href;
	});
	}catch (ex) {}
});
	
/* ==========================================================================
   #Progress Bar For Skills Page
   ========================================================================== */
   
		progressBar(99, $('#progressBar'));
		progressBar(80, $('#progressBar2'));
		progressBar(60, $('#progressBar3'));
		
/* ==========================================================================
   #Mobile Menu
   ========================================================================== */
			
		var $menu = $('#menu1'),
		$menulink = $('.menu-link');		
		$menulink.click(function() {
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
			return false;
		});
		
		$('nav#menu1 a').click(function() {
			$('#menu1').removeClass('active');
		});