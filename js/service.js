$(document).ready(function () {
    $(".crsl").slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 20000,
        pauseOnHover: false,
        variableWidth: true,
        cssEase: "linear",
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
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});
