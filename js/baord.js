$(".board-slider").owlCarousel({
    loop: true,
    nav: true,
    margin: 20,
    center: true,
    autoplay: true,
    autoplayTimout: 2000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 5,
        },
    },
});
