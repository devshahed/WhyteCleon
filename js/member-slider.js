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
});
