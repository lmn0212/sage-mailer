$(document).ready(function(){
    $('.navbar-toggler').click(function() {
        $(this).toggleClass('open');
    });

    $('.testimonials-car').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 200,
        arrows: false,
        easing: 'easeInCubic',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow:"<div class='slick-prev'><img src='../../../media/img/arrow.svg' alt='prev'></div>",
                    nextArrow:"<div class='slick-next'><img src='../../../media/img/arrow.svg' alt='next'></div>",
                }
            },
        ]
    });
    $('.price-carousel').slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:"<div class='slick-prev'></div>",
        nextArrow:"<div class='slick-next'></div>",
    });
    $('.collapse')
        .on('show.bs.collapse', function() {
            $(this)
                .parent()
                .find(".arrow-collapse")
                .css({
                    "-webkit-transform": "rotate(90deg)",
                    "-moz-transform": "rotate(90deg)",
                    "transform": "rotate(90deg)"
                });
        })
        .on('hide.bs.collapse', function() {
            $(this)
                .parent()
                .find(".arrow-collapse")
                .css({
                    "-webkit-transform": "rotate(0deg)",
                    "-moz-transform": "rotate(0deg)",
                    "transform": "rotate(0deg)"
                });
        });
});