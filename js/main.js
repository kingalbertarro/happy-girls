$(function(){
	$('.menuSp').click(function(){
		$('body').toggleClass('menuOpened');
	});
});

$(document).ready(function() {
	var topBtn = $('.pagetop');

    $(window).scroll(function () {
		if($(this).scrollTop() > 300) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	
	topBtn.click(function () {
		$('body,html').animate({
				scrollTop: 0
		}, 500);
		return false;
	});
})