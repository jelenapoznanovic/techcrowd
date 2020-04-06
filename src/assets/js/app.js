'use strict';


// ON DOCUMENT READY
$(document).ready(() => {
    //SVG for Everybody (ie9+, ...)
    svg4everybody();
    
    
	//scroll to element
	$(".group-main__links a").click(function(event) {
	    event.preventDefault();
	    var anchor = $(this).attr('href');
	    $('html,body').animate({
	        scrollTop: $(anchor).offset().top - 100
	    }, 500);
	});

	//colapse navigation for mobile on single page app
	$('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
	    $(this).parents('.navbar-collapse').collapse('hide');
	});

	//scroll to the top icon
	if($("#to_the_top").length) {
		var to_top_icon = $('#to_the_top');
		$(window).on('scroll', function(){
            if ($(this).scrollTop() < 200) {
		        to_top_icon.addClass('is-invisible');
		    } else {
		        to_top_icon.removeClass('is-invisible');
		    }
		});

		$("#to_the_top").on('click', function(e) {
		    e.preventDefault();
		    $("html, body").animate({ scrollTop: 0 }, "500");
		    return false;
		});
	}


	if($('.faq-button').length) {
		$('.faq-button, .btn-close').on('click', function(e){
			e.preventDefault();
			$('.faq-form').fadeToggle();
		});
	}

	if($('.js-text-slider').length) {
		$('.js-text-slider').slick({
			adaptiveHeight: true
		});
	}

	// progress bar
	if($('.investment__progress').length) {
		$('.investment__progress').each(function(){
			var progressLength = $(this).data('progress') + '%';
			// console.log(progressLength);
			$(this).css('width', progressLength);
		});
	}

	$('.nav-item--dropdown-icon').on('click', function() {
		$(this).next('.dropdown').stop().slideToggle();
	});

	var header = $('.header-main');
	var invest_button = $('#invest-button');

	$(window).on('scroll', function(){

		if(invest_button.length) {
			var scroll_top = $(window).scrollTop();
			var invest_button_top = invest_button.offset().top;

			if(scroll_top > invest_button_top) {
				header.addClass('invest-show');
			}
			else {
				header.removeClass('invest-show');
			}
		}

	});
});
