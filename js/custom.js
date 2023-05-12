$(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 20,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimout: 10000,
    autoplaySpeed: 10000,
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
