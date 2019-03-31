$(document).ready(function () {
	
	var sliderSections = $('.content-inn').slick({
		infinite: false,
    dots:true,
		arrows:false,
		draggable: false,
		swipe: false,
		focusOnSelect: true,
		vertical: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					draggable: true,
					swipe: true,
					vertical: false
				}
			}
		]
	});
	var navSlider = $('.header-right').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		focusOnSelect: true,
		variableWidth: true,
		asNavFor: '.content-inn'
	});
	sliderSections.mousewheel(function(e) {
		e.preventDefault();
		if (e.deltaY < 0) {
			$(this).slick('slickNext');
		} else {
			$(this).slick('slickPrev');
		}
	});
	


	$(document).on('click', '.header-right__item', function(e){
		e.preventDefault();
	});
	if ($(window).width() < 1365) {
		$(".galery-slider").slick({
			infinite: false,
			slidesToShow: 2.5,
			slidesToScroll: 1,
			dots: false,
			arrows: false, 
			responsive: [
				{
					breakpoint: 1025,
						settings: {
							slidesToShow: 2.5
					},
					breakpoint: 780,
						settings: {
							slidesToShow: 2
					},
					breakpoint: 600,
						settings: {
							slidesToShow: 2
					}
				}
			]
		}); 
	}  
	$(window).resize(function(){
    var $windowWidth = $(window).width();
    if ($windowWidth < 1365) {
        $(".galery-slider").slick({
					infinite: true,
					slidesToShow: 2.2,
					slidesToScroll: 3,
					dots: false,
					arrows: false
				});   
    }
	});

	$(document).on('click', '.content-switcher__bar', function(e){
		$(document).find('.content-inn').slick('unslick');
		$('.content-inn').slick({
			infinite: false,
			dots:true,
			arrows:false,
			draggable: false,
			swipe: false,
			focusOnSelect: true,
			vertical: true,
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						draggable: true,
						swipe: true,
						vertical: false
					}
				}
			]
		});
		if($(this).hasClass('render')){
			$(this).removeClass('render');
			$(document).find('.content-inn.animation').attr('style', 'display: block');
			$(document).find('.content-inn.render').attr('style', 'display: none');
			$(document).find('.header').attr('style', 'visibility: unset');
			$(document).find('.header2').attr('style', 'visibility: hidden;');
			$(document).find('.content-inn.render').css("background-image", "url(assets/images/bg0.jpg)");
		} else {
			$(this).addClass('render');
			$(document).find('.content-inn.animation').attr('style', 'display: none');
			$(document).find('.content-inn.render').attr('style', 'display: block');
			$(document).find('.header').attr('style', 'visibility: hidden');
			$(document).find('.header2').attr('style', 'visibility: unset;');
			$(document).find('.content-inn.render').css("background-image", "url(assets/images/bg3.jpg)");
		}
	});

});


$(document).ready(function() {
	var wrapperMenu = document.querySelector('.wrapper-menu');
	var sliderNumber = 0;
	
	wrapperMenu.addEventListener('click', function(){
		wrapperMenu.classList.toggle('open');  
		
		if($(".header").hasClass("header_up")){
			console.log(sliderNumber);
			if(sliderNumber >= 3){
				$(".line-menu").css("background-color", "#008F39 !important");
			} else {
				$(".line-menu").css("background-color", "white")
			}
		} else {
			$(".line-menu").css("background-color", "#008F39");
		}
		$(".header").toggleClass("header_up");
	})

	$('a[data-slick-index]').click(function(e) {
		e.preventDefault();
		var slideNum = $(this).data('slick-index');
		wrapperMenu.classList.toggle('open');  
		if($(".header").hasClass("header_up")){
			if(slideNum >= 3){
				$(".line-menu").css("background-color", "#008F39");
			} else {
				$(".line-menu").css("background-color", "white")
			}
		} else {
			$(".line-menu").css("background-color", "#008F39");
		}
		$(".header").toggleClass("header_up");
	});




	var befSlide = 0;
	var kolSlide = 2;
	$('a[data-slide]').click(function(e) {
		e.preventDefault();
		var slideno = $(this).data('slide');
		$('.content-inn').slick('slickGoTo', slideno - 1);
	});
	$('.content-inn.animation').on('afterChange', function(event, slick, currentSlide){
		sliderNumber = currentSlide;
		if(currentSlide == 1 && befSlide == 0){
			$(this).css("animation", "bg" + befSlide +" 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg" + befSlide +" 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg" + befSlide +" 0.5s ease-in-out");
		}
		if(currentSlide == 2 && befSlide == 1){
			$(this).css("animation", "bg" + befSlide +" 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg" + befSlide +" 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg" + befSlide +" 0.5s ease-in-out");
		}
		if(currentSlide == 1 && befSlide == 2){
			$(this).css("animation", "bg" + befSlide +" 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg" + befSlide +" 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg" + befSlide +" 0.5s ease-in-out");
		}
		if(currentSlide == 0 && befSlide == 1){
			$(this).css("animation", "bg" + (befSlide + 2) +" 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg" + (befSlide + 2) +" 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg" + (befSlide + 2) +" 0.5s ease-in-out");
		}
		
		if($(".slick-current").hasClass("f5") && ($(window).width() > 769)){
			$(".svyaz").css("display", "none");
		}
		if($(".slick-active").not("f5")){
			$(".svyaz").css("display", "block");
		}
		if($(".slick-active").hasClass("f5") && ($(window).width() > 1200)){
			$(".svyaz").css("display", "none");
		}
		if((currentSlide != 4)  && $(window).width() < 1025){
			$(".scroll-mouse").css("display", "flex")
		}
		if(currentSlide >= 3){
			$(".line-menu").css("background-color", "#008F39");
		} else{
			$(".line-menu").css("background-color", "white");
		}
		if(currentSlide == 4){
			$(".scroll-mouse").css("display", "flex").css("align-items","center").css("bottom","10px");
			$(".scroll-mouse__p").css("margin", "0");
			$(".scroll-mouse__p").css("line-heigth", "10px");
			$(".svyaz").css("margin-left", "10px")
		}
		if((currentSlide != 4)  && ($(window).width() > 1200)){
			$(".scroll-mouse").css("display", "block").css("bottom","30px");
			$(".scroll-mouse__p").css("margin", "12px 0");
			$(".scroll-mouse__p").css("line-heigth", "18px");
			$(".svyaz").css("margin-left", "0")
		}
		if(currentSlide < 3){
			$(this).css("background-image", "url(assets/images/bg" + currentSlide + ".jpg)");
		}

	});
	$('.content-inn.render').on('afterChange', function(event, slick, currentSlide){
		sliderNumber = currentSlide;
		if(currentSlide == 1 && befSlide == 0){
			$(this).css("animation", "bg" + (befSlide  + 4) +" 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg" + (befSlide  + 4) +" 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg" + (befSlide  + 4) +" 0.5s ease-in-out");
		}
		if(currentSlide == 2 && befSlide == 1){
			$(this).css("animation", "bg" + (befSlide  + 4) +" 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg" + (befSlide  + 4) +" 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg" + (befSlide  + 4) +" 0.5s ease-in-out");
		}
		if(currentSlide == 1 && befSlide == 2){
			$(this).css("animation", "bg" + (befSlide  + 4) +" 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg" + (befSlide  + 4) +" 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg" + (befSlide  + 4) +" 0.5s ease-in-out");
		}
		if(currentSlide == 0 && befSlide == 1){
			$(this).css("animation", "bg" + ((befSlide  + 4) + 2) +" 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg" + ((befSlide  + 4) + 2) +" 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg" + ((befSlide  + 4) + 2) +" 0.5s ease-in-out");
		}
		
		if($(".slick-current").hasClass("f5") && ($(window).width() > 769)){
			$(".svyaz").css("display", "none");
		}
		if($(".slick-active").not("f5")){
			$(".svyaz").css("display", "block");
		}
		if($(".slick-active").hasClass("f5") && ($(window).width() > 1200)){
			$(".svyaz").css("display", "none");
		}
		if((currentSlide != 4)  && $(window).width() < 1025){
			$(".scroll-mouse").css("display", "flex")
		}
		if(currentSlide >= 3){
			$(".line-menu").css("background-color", "#008F39");
		} else{
			$(".line-menu").css("background-color", "white");
		}
		if(currentSlide == 4){
			$(".scroll-mouse").css("display", "flex").css("align-items","center").css("bottom","10px");
			$(".scroll-mouse__p").css("margin", "0");
			$(".scroll-mouse__p").css("line-heigth", "10px");
			$(".svyaz").css("margin-left", "10px")
		}
		if((currentSlide != 4)  && ($(window).width() > 1200)){
			$(".scroll-mouse").css("display", "block").css("bottom","30px");
			$(".scroll-mouse__p").css("margin", "12px 0");
			$(".scroll-mouse__p").css("line-heigth", "18px");
			$(".svyaz").css("margin-left", "0")
		}
		if(currentSlide < 3){
			$(this).css("background-image", "url(assets/images/bg" + (currentSlide + 3) + ".jpg)");
		}
	});
	$('.content-inn').on('beforeChange', function(event, slick, currentSlide){
		befSlide = currentSlide;
	});


	$('.svyaz').magnificPopup({
		type: 'inline',
		focus: '#na'
 });
})
