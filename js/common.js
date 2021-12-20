$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
		} else {
			$(".menu-mobile").slideUp(200);
		}
		
	});

	$(".menu-mobile li:not(.menu__haschild) a").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
	});

	$(".menu-mobile .menu__haschild a").click(function() {
		$(this).siblings("ul").slideToggle(200);
	});

	//слайдер

	$('.slider-partners').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#C2D7F2" style="mix-blend-mode:screen"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.7759 28.7417C13.8496 25.8507 10.9175 22.9652 8 20.0655C10.9207 17.1697 13.85 14.2824 16.7759 11.3918C17.5745 10.6028 18.8692 10.6028 19.6678 11.3918C20.4664 12.1807 20.4664 13.4598 19.6678 14.2488L15.8236 18.0465L32.6218 18.0465C33.7512 18.0465 34.6667 18.951 34.6667 20.0668C34.6667 21.1825 33.7512 22.087 32.6218 22.087L15.8236 22.087L19.6678 25.8847C20.4664 26.6736 20.4664 27.9527 19.6678 28.7417C18.8692 29.5306 17.5745 29.5306 16.7759 28.7417Z" fill="#356DB8"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="#C2D7F2" style="mix-blend-mode:screen"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.2241 28.7417C26.1504 25.8507 29.0825 22.9652 32 20.0655C29.0793 17.1697 26.15 14.2824 23.2241 11.3918C22.4255 10.6028 21.1308 10.6028 20.3322 11.3918C19.5336 12.1807 19.5336 13.4598 20.3322 14.2488L24.1764 18.0465L7.3782 18.0465C6.24885 18.0465 5.33333 18.951 5.33333 20.0668C5.33333 21.1825 6.24885 22.087 7.3782 22.087L24.1764 22.087L20.3322 25.8847C19.5336 26.6736 19.5336 27.9527 20.3322 28.7417C21.1308 29.5306 22.4255 29.5306 23.2241 28.7417Z" fill="#356DB8"/></svg><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				arrows: false,
				dots: true,
			}
		}
		]
	});

	$('.slider-main').each(function(){
		var $slider = $(this);
		$controls_slider = $(this).siblings('.slider-controls');

		if ($slider.length) {
			var currentSlide;
			var slidesCount;
			var sliderCounter = document.createElement('div');
			sliderCounter.classList.add('slider__counter');

			var updateSliderCounter = function(slick, currentIndex) {
				currentSlide = slick.slickCurrentSlide() + 1;
				slidesCount = slick.slideCount;
				$(sliderCounter).html('<span>'+currentSlide + '/' +slidesCount+ '')
			};

			$slider.on('init', function(event, slick) {
				$(this).siblings(".slider-controls").find('.slider-count').append(sliderCounter);
				updateSliderCounter(slick);
				$(this).siblings(".slider-controls").find(".slider_number").text(slick.slideCount);
			});

			$slider.on('afterChange', function(event, slick, currentSlide) {
				updateSliderCounter(slick, currentSlide);
			});

			$slider.slick({
				arrows: true,
				dots: false,
				prevArrow: '<div class="slick-prev slick-arrow"><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 5H1M1 5L5.5 0.5M1 5L5.5 9.5" stroke="#070E17"/></svg><div/>',
				nextArrow: '<div class="slick-next slick-arrow"><svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5H17M17 5L12.5 0.5M17 5L12.5 9.5" stroke="#070E17"/></svg><div/>',
				infinite: false,
				slidesToScroll: 1,
				slidesToShow: 1,
				appendArrows: $controls_slider,
				appendDots: $controls_slider,
				responsive: [
		{
			breakpoint: 992,
			settings: {
				adaptiveHeight: true
			}
		}
		]
			});
		} 
	});


	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

