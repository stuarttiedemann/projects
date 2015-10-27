$(document).ready(function(){
	var mainNav = $('#nav-bar');
	var mainNavScroll = 'nav-bar-scrolled';
	var mainPadding = 'padding-main';
	var headerHeight = ($('#header').height()+58);
	var main = $('.main');
	console.log(headerHeight);

	$('#nav-bar li a').click(function(){
		$('.active').removeClass('active');
		$(this).addClass('active');
	});
	$(window).scroll(function(){
		console.log($(this).scrollTop());
		if($(this).scrollTop() > headerHeight){
			mainNav.addClass(mainNavScroll);
			main.addClass(mainPadding);
		}else{
			mainNav.removeClass(mainNavScroll);
			main.removeClass(mainPadding);
		}
	});
});