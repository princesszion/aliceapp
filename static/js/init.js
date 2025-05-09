/*
 * Copyright (c) 2021 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";
	
	// -----------------------------------------------------
	// ---------------   COLOR PICKER    -------------------
	// -----------------------------------------------------

	function waxon_tm_picker(){

		if(jQuery('.waxon_tm_settings').length){

			// attach background for all colors
			var list	= jQuery('.waxon_tm_settings .colors li a');
			list.each(function(){
				jQuery(this).css({backgroundColor: jQuery(this).data('color')});
			});

			// change root color
			list.on('click',function(){
				var element = jQuery(this);
				var color	= element.data('color');
				jQuery(':root').css('--main-color', color);
				return false;
			});	
		}

	}
	waxon_tm_picker();
	
	// -----------------------------------------------------
	// --------------------   MODALBOX    ------------------
	// -----------------------------------------------------

	function waxon_tm_modalbox(){

		jQuery('.waxon_tm_all_wrap').prepend('<div class="waxon_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');
	}
	waxon_tm_modalbox();
	
	// -----------------------------------------------------
	// -------------   ABOUT ANIMATION    ------------------
	// -----------------------------------------------------
	
	function waxon_tm_about_animations(){
		
		var image = document.getElementsByClassName('thumbnail');
		new simpleParallax(image, {
			delay:5,
			overflow: true,
			orientation:'down'
		});
		
		var image2 = document.getElementsByClassName('thumbnail-2');
		new simpleParallax(image2, {
			delay:5,
			overflow: true,
			orientation:'right'
		});
		
		var image3 = document.getElementsByClassName('thumbnail-3');
		new simpleParallax(image3, {
			delay:5
		});
		
		var image4 = document.getElementsByClassName('thumbnail-4');
		new simpleParallax(image4, {
			delay:5,
			orientation:'right'
		});
	}
	waxon_tm_about_animations();
	
	// -----------------------------------------------------
	// --------------------    WOW JS    -------------------
	// -----------------------------------------------------

 	new WOW().init();
	
	// -------------------------------------------------
	// -------------  MODALBOX PORTFOLIO  --------------
	// -------------------------------------------------

	function waxon_tm_modalbox_portfolio(){

		var modalBox	= jQuery('.waxon_tm_modalbox');
		var button		= jQuery('.waxon_tm_portoflio .portfolio_popup');

		button.on('click',function(){
			var element 	= jQuery(this);
			var parent		= element.closest('li');
			var image		= parent.find('.image .main').data('img-url');
			var details 	= parent.find('.hidden_content_portfolio').html();
			var title	 	= parent.find('.title h3 a').text();

			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(details);
			modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
			modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title"><h3 class="title">'+title+'</h3></div>');	
			waxon_tm_data_images();
			return false;
		});
	}
	waxon_tm_modalbox_portfolio();
	
	// -------------------------------------------------
	// -------------  MODALBOX NEWS  -------------------
	// -------------------------------------------------

	function waxon_tm_modalbox_news(){
	
		var modalBox		= jQuery('.waxon_tm_modalbox');
		var button			= jQuery('.waxon_tm_news .full_link, .waxon_tm_news ul li .details .title a');
		var closePopup		= modalBox.find('.close');

		button.on('click',function(){
			var element 	= jQuery(this);
			var parent 		= element.closest('li');
			var content 	= parent.find('.news_hidden_details').html();
			var image		= parent.find('.image .main').data('img-url');
			var meta		= parent.find('.details .extra').html();
			var title		= parent.find('.details .title a').text();
			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(content);
			modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
			modalBox.find('.news_popup_informations .image').after('<div class="details"><div class="meta">'+meta+'</div><div class="title"><h3>'+title+'</h3></div></div>');
			waxon_tm_data_images();
			return false;
		});
		closePopup.on('click',function(){
			modalBox.removeClass('opened');
			modalBox.find('.description_wrap').html('');
			return false;
		});
	}
	waxon_tm_modalbox_news();
	
	// -----------------------------------------------------
	// -----------------   SWIPER SLIDER    ----------------
	// -----------------------------------------------------
	
	function waxon_tm_hero_slider(){
		
		var section		= $('.fn_cs_personal_slider');
		section.each(function(){
			var element				= $(this);
			var mainSliderSelector	= element.find('.swiper-container');
			var transform 			= 'Y';
			var direction 			= 'horizontal';
			var	interleaveOffset 	= 0.5;
			if(direction === 'horizontal'){
				transform 			= 'X';
			}
			// Main Slider
			var mainSliderOptions 	= {
				loop: true,
				speed: 1500,
				autoplay:{
					delay:5000
				},
				slidesPerView: 1,
				direction: direction,
				loopAdditionalSlides: 10,
				watchSlidesProgress: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					init: function(){
						this.autoplay.stop();
					},
					imagesReady: function(){
						this.autoplay.start();
					},
					progress: function(){
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress 	= swiper.slides[i].progress,
							innerOffset 		= swiper.width * interleaveOffset,
							innerTranslate 		= slideProgress * innerOffset;
							$(swiper.slides[i]).find(".main_image").css({transform: "translate"+transform+"(" + innerTranslate + "px)"});
						}
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".main_image").style.transition =
							speed + "ms";
						}
					}
				}
			};
			new Swiper(mainSliderSelector, mainSliderOptions);
		});

	}
	waxon_tm_hero_slider();
	
	
	// -----------------------------------------------------
	// ---------------------   SWITCHERS    ----------------
	// -----------------------------------------------------

	function waxon_tm_color_switcher(){

		var list	= jQuery('.waxon_tm_settings .colors li a');

		list.on('click',function(){
			var element = jQuery(this);
			var elval	= element.attr('class');
			element.closest('.waxon_tm_all_wrap').attr('data-color',''+elval+'');
			return false;
		});	
	}
	waxon_tm_color_switcher();


	function waxon_tm_switcher_opener(){

		var settings	= jQuery('.waxon_tm_settings');
		var button		= settings.find('.link');
		var direction	= settings.find('.direction li a');
		var light		= settings.find('.direction li a.light');
		var dark		= settings.find('.direction li a.dark');

		button.on('click',function(){
			var element = jQuery(this);
			if(element.hasClass('opened')){
				element.removeClass('opened');
				element.closest('.waxon_tm_settings').removeClass('opened');
			}else{
				element.addClass('opened');
				element.closest('.waxon_tm_settings').addClass('opened');
			}
			return false;
		});

		direction.on('click',function(){
			var element = jQuery(this);
			if(!element.hasClass('active')){
				direction.removeClass('active');
				element.addClass('active');
			}
		});

		dark.on('click',function(){
			var el = jQuery(this);
			jQuery('body').addClass('dark');
			jQuery('.waxon_tm_partners').addClass('opened');
			el.closest('.waxon_tm_settings').addClass('changed');
			return false;
		});

		light.on('click',function(){
			var ele = jQuery(this);
			jQuery('body').removeClass('dark');
			jQuery('.waxon_tm_partners').removeClass('opened');
			ele.closest('.waxon_tm_settings').removeClass('changed');
			return false;
		});
	}
	waxon_tm_switcher_opener();


	function waxon_tm_cursor_switcher(){

		var wrapper		= jQuery('.waxon_tm_all_wrap');
		var button		= jQuery('.waxon_tm_settings .cursor li a');
		var show		= jQuery('.waxon_tm_settings .cursor li a.show');
		var hide		= jQuery('.waxon_tm_settings .cursor li a.hide');

		button.on('click',function(){
			var element = jQuery(this);
			if(!element.hasClass('showme')){
				button.removeClass('showme');
				element.addClass('showme');
			}
			return false;
		});
		show.on('click',function(){
			wrapper.attr('data-magic-cursor','')
		});
		hide.on('click',function(){
			wrapper.attr('data-magic-cursor','hide')
		});

	}
	waxon_tm_cursor_switcher();
	
	// -------------------------------------------------
	// -------------  SLIDER KENBURN  ------------------
	// -------------------------------------------------

	function waxon_tm_kenburn_slider(){
		
		var mySlider	= jQuery('.vegas-slide-inner');
		
		if(mySlider.length){
			var dataImages	= jQuery('.vegas-slide-inner').data('images');
			var nameArray	= dataImages.split(',');
			var html	= []; 

		    for(var i=0;i<nameArray.length;i++){
			   html.push({src:nameArray[i]});
		    }	
		   jQuery(function() {
			  jQuery('.waxon_tm_hero .overlay_slider').vegas({
			  timer:false,	
			  animation: [ 'kenburnsUp', 'kenburnsLeft', 'kenburnsRight'],
			  delay:7000,
			  slides: html
			  });
		   });

		}
	   
	}
	waxon_tm_kenburn_slider();
	
	// -------------------------------------------------
	// -------------------  ANCHOR ---------------------
	// -------------------------------------------------

	jQuery('.anchor_nav').onePageNav();
	
	// -------------------------------------------------
	// -------------------  FILTER OPENER --------------
	// -------------------------------------------------

	function waxon_tm_filter_opener(){

		var button	= jQuery('.waxon_tm_portoflio .portfolio_filter .wrapper a');
		var list	= jQuery('.waxon_tm_portoflio .portfolio_filter ul li');

		button.on('click',function(){
			var element = jQuery(this);
			if(element.hasClass('opened')){
				element.removeClass('opened');
				list.removeClass('opened');
			}else{
				element.addClass('opened');
				list.each(function(i){
					var ele = jQuery(this);
					setTimeout(function(){ele.addClass('opened');},i*100);
				});
			}
			return false;
		});
	}
	waxon_tm_filter_opener();
	
	// -------------------------------------------------
	// -------------  PROGRESS BAR  --------------------
	// -------------------------------------------------

	function tdProgress(container){

		container.find('.progress_inner').each(function() {
			var progress 		= jQuery(this);
			var pValue 			= parseInt(progress.data('value'), 10);
			var pColor			= progress.data('color');
			var pBarWrap 		= progress.find('.bar');
			var pBar 			= progress.find('.bar_in');
			pBar.css({width:pValue+'%', backgroundColor:pColor});
			setTimeout(function(){pBarWrap.addClass('open');});
		});
	}

	jQuery('.waxon_progress').each(function() {

		var pWrap 			= jQuery(this);
		pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	});
	
	// -----------------------------------------------------
	// --------------------    JARALLAX    -----------------
	// -----------------------------------------------------

	function waxon_tm_jarallax(){

		jQuery('.jarallax').each(function(){
			var element			= jQuery(this);
			var	customSpeed		= element.data('speed');

			if(customSpeed !== "undefined" && customSpeed !== ""){
				customSpeed = customSpeed;
			}else{
				customSpeed 	= 0.5;
			}

			element.jarallax({
				speed: customSpeed,
				automaticResize: true
			});
		});
	}
	waxon_tm_data_images();
	waxon_tm_jarallax();
	
	// -----------------------------------------------------
	// ---------------   MOBILE MENU    --------------------
	// -----------------------------------------------------

	function edrea_tm_hamburger(){
		
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.waxon_tm_mobile_menu .dropdown');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}
	edrea_tm_hamburger();
	
	// -----------------------------------------------------
	// --------------   TOPBAR BACKGROUND    ---------------
	// -----------------------------------------------------

	function waxon_tm_nav_bg(){

		jQuery(window).on('scroll',function(){
			var topbar	 		= jQuery('.waxon_tm_topbar,.waxon_tm_topbar_single');
			var WinOffset		= jQuery(window).scrollTop();

			if(WinOffset >= 100){
				topbar.addClass('animate');
			}else{
				topbar.removeClass('animate');
			}
		});
	}
	waxon_tm_nav_bg();
	
	// -----------------------------------------------------
	// ------------------   CURSOR    ----------------------
	// -----------------------------------------------------

	function waxon_tm_cursor(){

		var myCursor	= jQuery('.mouse-cursor');

		if(myCursor.length){
			if ($("body")) {
			const e = document.querySelector(".cursor-inner"),
				t = document.querySelector(".cursor-outer");
			let n, i = 0,
				o = !1;
			window.onmousemove = function (s) {
				o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
			}, $("body").on("mouseenter", "a, .cursor-pointer", function () {
				e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
			}), $("body").on("mouseleave", "a, .cursor-pointer", function () {
				$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
			}), e.style.visibility = "visible", t.style.visibility = "visible"
		}
		}
	};
	waxon_tm_cursor();
	
	// -----------------------------------------------------
	// ----------------    OWL CAROUSEL    -----------------
	// -----------------------------------------------------

	function waxon_tm_carousel(){

		var carousel1			= jQuery('.waxon_tm_service .owl-carousel');

		var rtlMode	= false;

		if(jQuery('body').hasClass('rtl')){
			rtlMode = 'true';
		}

		carousel1.owlCarousel({
			loop: true,
			items: 2,
			lazyLoad: false,
			margin: 50,
			autoplay: true,
			autoplayTimeout: 7000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:2},
				1040:{items:3},
				1200:{items:3},
				1600:{items:3},
				1920:{items:3}
			}
		});
		waxon_tm_imgtosvg();
		
		var carousel2			= jQuery('.partners .owl-carousel');
		
			carousel2.owlCarousel({
			loop: true,
			items: 4,
			lazyLoad: false,
			margin: 50,
			autoplay: true,
			autoplayTimeout: 7000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:2},
				768:{items:3},
				1040:{items:3},
				1200:{items:3},
				1600:{items:4},
				1920:{items:4}
			}
		});
		
		var carousel3			= jQuery('.waxon_tm_testimonials .owl-carousel');
		
			carousel3.owlCarousel({
			loop: true,
			items: 3,
			lazyLoad: false,
			margin: 50,
			autoplay: true,
			autoplayTimeout: 7000,
			dots: false,
			nav: false,
			rtl: rtlMode,
			navSpeed: false,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 3
				}
			}
		});
	}
	waxon_tm_carousel();
	
	
	// -----------------------------------------------------
	// ---------------    IMAGE TO SVG    ------------------
	// -----------------------------------------------------

	function waxon_tm_imgtosvg(){

		jQuery('img.svg').each(function(){

			var jQueryimg 		= jQuery(this);
			var imgClass		= jQueryimg.attr('class');
			var imgURL			= jQueryimg.attr('src');

			jQuery.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var jQuerysvg = jQuery(data).find('svg');

				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

				// Replace image with new SVG
				jQueryimg.replaceWith(jQuerysvg);

			}, 'xml');

		});
	}
	waxon_tm_imgtosvg();
	
	// -----------------------------------------------------
	// --------------------   POPUP    ---------------------
	// -----------------------------------------------------

	function waxon_tm_popup(){

		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
		jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: true
			});
		});

		jQuery('.soundcloude_link').magnificPopup({
		  type : 'image',
		   gallery: {
			   enabled: true, 
		   },
		});
	}
	waxon_tm_popup();

	// -----------------------------------------------------
	// ---------------   DATA IMAGES    --------------------
	// -----------------------------------------------------

	function waxon_tm_data_images(){

		var data			= jQuery('*[data-img-url]');

		data.each(function(){
			var element			= jQuery(this);
			var url				= element.data('img-url');
			element.css({backgroundImage: 'url('+url+')'});
		});
	}
	waxon_tm_data_images();
	
	// -----------------------------------------------------
	// -------------------    COUNTER    -------------------
	// -----------------------------------------------------

	jQuery('.tm_counter').each(function() {

		var el		= jQuery(this);
		el.waypoint({
			handler: function(){

				if(!el.hasClass('stop')){
					el.addClass('stop').countTo({
						refreshInterval: 50,
						formatter: function (value, options) {
							return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
						},	
					});
				}
			},offset:'80%'	
		});
	});

	// -------------------------------------------------
	// -----------------    PORTFOLIO    ---------------
	// -------------------------------------------------

	// filterable 

	function waxon_tm_portfolio(){

		if(jQuery().isotope) {

			// Needed variables
			var list 		 = jQuery('.waxon_tm_portoflio .portfolio_inner ul');
			var filter		 = jQuery('.waxon_tm_portoflio .portfolio_filter ul');

			if(filter.length){
				// Isotope Filter 
				filter.find('a').on('click', function(){
					var selector = jQuery(this).attr('data-filter');
					list.isotope({ 
						filter				: selector,
						animationOptions	: {
							duration			: 750,
							easing				: 'linear',
							queue				: false
						}
					});
					return false;
				});	

				// Change active element class
				filter.find('a').on('click', function() {
					filter.find('a').removeClass('current');
					jQuery(this).addClass('current');
					return false;
				});	
			}
		}
	}
	waxon_tm_portfolio();
	
	function waxon_tm_myload(){
		
		var speed = 1000;
		
		setTimeout(function(){
			jQuery('.waxon_tm_preloader').addClass('loaded');
		}, speed);
		setTimeout(function(){
			jQuery('.waxon_tm_hero .background .myOverlay').addClass('loaded');
		}, speed+1000);
		setTimeout(function(){
			jQuery('.waxon_tm_topbar.home').addClass('opened');
		}, speed+2000);
	
		setTimeout(function(){
			waxon_tm_isotope();
		}, speed+4000);
	}

	// -----------------------------------------------------
	// --------------    ISOTOPE MASONRY    ----------------
	// -----------------------------------------------------

	function waxon_tm_isotope(){

		var masonry = $('.masonry');
		if($().isotope){
			masonry.each(function(){
				$(this).isotope({
				  itemSelector: '.masonry_item',
				  masonry: {

				  }
				});
			});
		}
	}
	waxon_tm_isotope();

	// -----------------------------------------------------
	// ----------------    CONTACT FORM    -----------------
	// -----------------------------------------------------

	function waxon_tm_contact_form(){

		jQuery(".contact_form #send_message").on('click', function(){

			var name 		= jQuery(".contact_form #name").val();
			var email 		= jQuery(".contact_form #email").val();
			var message 	= jQuery(".contact_form #message").val();
			var subject 	= jQuery(".contact_form #subject").val();
			var success     = jQuery(".contact_form .returnmessage").data('success');

			jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
			//checking for blank fields	
			if(name===''||email===''||message===''){

				jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
			}
			else{
				// Returns successful data submission message when the entered information is stored in database.
				jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {

					jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


					if(jQuery(".contact_form .returnmessage span.contact_error").length){
						jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
					}else{
						jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
						jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
					}

					if(data===""){
						jQuery("#contact_form")[0].reset();//To reset form fields on success
					}

				});
			}
			return false; 
		});
	}
	waxon_tm_contact_form();
	
	// -----------------------------------------------------
	// ---------------   CIRCULAR PROGRESS   ---------------
	// -----------------------------------------------------

	function cavani_tm_circular_progress(){

		var ww		= jQuery(window).width();
		var circVal;
		var colorSchemes	= jQuery(':root').css('--main-color');

		if(ww > 1700){
			circVal = 165;
		}
		else if(ww > 768){
			circVal = 145;
		}
		else{
			circVal = 90;
		}

		jQuery('.circular_progress_bar .myCircle').each(function(){
			var element	= jQuery(this);
			element.append('<span class="number"></span>');
			var value	= element.data('value');
			element.circleProgress({
				size: circVal,
				value: 0,
				animation: {duration: 1400},
				thickness: 8,
				fill: colorSchemes,
				emptyFill: 'rgba(0,0,0,.1)',
				startAngle: -Math.PI/2
			  }).on('circle-animation-progress', function(event, progress, stepValue) {
					element.find('.number').text(parseInt(stepValue.toFixed(2)*100) + '%');
			  });
			  element.circleProgress('value', 1.0);
			  setTimeout(function() { element.circleProgress('value', value); }, 1400);
		});
	}
	cavani_tm_circular_progress();
	
	// -------------------------------------------------
	// -------------  GLITCH  --------------------------
	// -------------------------------------------------

	$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});
	
	// -------------------------------------------------
	// -------------  RESIZE FUNCTION  -----------------
	// -------------------------------------------------
	
	jQuery(window).on('resize',function(){
		waxon_tm_isotope();
		waxon_tm_portfolio();
	});
	
	// -------------------------------------------------
	// -------------  LOAD FUNCTION  -------------------
	// -------------------------------------------------
	
	jQuery(window).load('body', function(){
		waxon_tm_myload();
	});
	
});