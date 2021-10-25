$(function() {

    $('.burger').click(function() {
        $(this).toggleClass('opened');
        $('.burger-menu').toggleClass('active').fadeIn();
    });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear'
    });

     $('.slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear'
    });

});
