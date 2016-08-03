function resize() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	// STICKY FOOTER
	var footerHeight = $('footer').outerHeight();
	var footerTop = (footerHeight) * -1
	$('footer').css({marginTop: footerTop});
	$('#main-wrapper').css({paddingBottom: footerHeight});
}

$(window).resize(function() {
	resize();
});

$(document).ready(function() {
	resize();
});

$(window).load(function() {
	resize();
});

// preloader once done
Pace.on('done', function() {
	// totally hide the preloader especially for IE
	setTimeout(function() {
		$('.pace-inactive').hide();
	}, 500);
});