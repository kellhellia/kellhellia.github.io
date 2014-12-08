$(function(){
	var itemTemplate = '<li class="item clearfix">'+
						'<div class="item__triangle"></div>'+
						'<div class="item__img pull-left">'+'<i class="fa fa-paper-plane fa-3x"></i>'+'</div>'+
						'<div class="item__content">'+
							'<div class="item__title">This is title</div>'+
							'<div class="item__text">This is something description with <a href="#" class="blue-link"><u>something link</u></a></div>'+
						'</div>'+
					'</li>';

	var list = $('.last-applied__list');

	setInterval(function(){
		$(itemTemplate)
			.hide()
			.css("opacity", 0.0)
			.prependTo(list)
			.slideDown("slow")
			.animate({"opacity": 1.0})
	},2000);
});