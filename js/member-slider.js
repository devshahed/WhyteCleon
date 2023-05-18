const swiper = new Swiper(".member-slider", {
    effect: "coverflow",
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
        nextEl: ".next-member",
        prevEl: ".prev-member",
    },
    coverflowEffect: {
        rotate: 0,
        scale: 0.8,
        slideShadows: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
