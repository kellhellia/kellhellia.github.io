(function($) {
	'use strict';
	/*
	tooltip
	=========================== */
	$('.tooltips').tooltip({
		selector: "a[data-toggle^=tooltip]"
	})	
	
	/*
	Close navbar for mobile device
	=========================== */
	$('.navbar-toggle').click(function(){
		$(".collapse").slideToggle();
		return false; 
	});
		
	$('.navbar-nav li a').click(function(){
		$(".collapse").slideToggle("normal");
	});
	
	/* Client logo hover
	=========================== */	
	$(".logo-hover").css({'opacity':'0','filter':'alpha(opacity=0)'});	
	$('.client-link').hover(function(){
				$(this).find('.logo-hover').stop().fadeTo(900, 1);
				$(this).find('.client-logo').stop().fadeTo(900, 0);
	}, function() {
				$(this).find('.logo-hover').stop().fadeTo(900, 0);
				$(this).find('.client-logo').stop().fadeTo(900, 1);
	});	
})(jQuery);