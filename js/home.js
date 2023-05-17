const swiper1 = new Swiper(".testimonials", {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
});
const swiper2 = new Swiper(".home-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});
