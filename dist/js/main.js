//Phone mask
$(document).ready(function() {
    $('.form-phone').mask("+7 (999) 99 99 99");
});

$(function(){
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});


//page anchors
if (window.matchMedia('(max-width: 768px)').matches) {
    $('a[href^="#"], *[data-href^="#"]').on('click', function (e) {
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({scrollTop: $(d).offset().top - 80}, t);

    });
} else {

    $('a[href^="#"], *[data-href^="#"]').on('click', function (e) {
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({scrollTop: $(d).offset().top - 80}, t);

    });
}

//top slider
$('.open-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: '.open-dots'
});


$('.works-slider').slick({
    appendArrows: $('.works-arrows'),
    arrows: true,
    dots: true,
    centerMode: true,
    appendArrows: $('.works-slider__arrows'),
    appendDots: $('.works-dots'),
    responsive: [
        {
            breakpoint: 4000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

            }
        },
        {
            breakpoint: 1441,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },

        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },

        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false

            }
        },

    ]
});


//Проверка
if (window.innerWidth >= 1024) {
    $('.services-slider').slick('unslick');

} else {
    $('.services-slider').slick({
        slidesToShow: 1,
        arrows: false,
        centerMode: true,

    });
}

