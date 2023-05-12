$(document).ready(function () {
    $(".crsl").slick({
        autoplay: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        useTransform: false,
    });
});

$(".rl-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 20,
    autoplay: true,
    autoplayTimout: 1000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 0.2,
        },
        600: {
            items: 0.5,
        },
        1000: {
            items: 1,
        },
    },
});
