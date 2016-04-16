$(document).ready(function() {
	new WOW().init({
		mobile: false
	});
	/*
		Карусель, документация тут http://kenwheeler.github.io/slick/
	*/
	$(".slick").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		infinite: true,
		speed: 300,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 10000
	});

	/*
		Вопросы и ответы
	*/

	$('.faq-query').click(function() {
		$(this).parent().addClass('faq-open');
	});

	$('.faq-close').click(function() {
		$(this).parent().removeClass('faq-open');
	});

	/*
		popup-окна с помощью fancybox
	*/

	$('.link-fancybox-ajax').fancybox({
		type: "ajax",
		autoDimensions: false
	});

	$(".link-fancybox-call").fancybox({
		autoDimensions: false,
		href: "#call"
	});

	/*
		Функции валидации
	*/

	function valid ($input) {
		if($input.val().length > 2) {
			return true;
		}

		return false;
	}

	/*
		Вывод результатов валидации
	*/

	function printValid($input) {

		if(valid($input)) {
			$input.parent().removeClass("has-warning");
			$input.parent().addClass("has-success");
		} else {
			$input.parent().removeClass("has-success");
			$input.parent().addClass("has-warning");
		}
	}

	/*
		Проверка полей
	*/

	$("#inputName, #inputPhone").change(function() {
		$this = $(this);

		printValid($this);
	});

	/*
		Плавная прокрутка
	*/

	$(".nav a").click(function() {
			var e = $(this).attr("href"),
				d = $(e).offset().top;

			$('html, body').animate({ scrollTop: d }, 1100, (function () {
				
				location.hash = e.substr(1);
			}).bind(this));

			return false;
	});

	/*
		Маска для телефона
	*/

	$("#inputPhone").mask("+7 (999) 999-99-99");

	$('form').ajaxForm({
		url: "politic.html",
		beforeSubmit: function(data, $form) {
			var $name = $("#inputName"),
				$phone = $("#inputPhone");
			
			printValid($name);
			printValid($phone);

			if( ! (valid($name) && valid($phone)) ) {
				alert("Одно из полей заполнено не верно!");
				return false;
			} else {
				$.fancybox.close();
				$form.trigger('reset');
				yaCounter36798385.reachGoal('form');
			}
		},

		success: function() {

			
		}

	});

});