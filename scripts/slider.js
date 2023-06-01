new Swiper(".swiper", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 800,
    parallax: true,
    loop: false,
    navigation: {
        nextEl: ".navig-block__next",
        prevEl: ".navig-block__prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "progressbar",
    },
    on: {
        init: function (swiper) {
            const allSlides = document.querySelector(".fraction-controll__all");
            const allSlidesItems = document.querySelectorAll(
                ".slide-main-block:not(.swiper-slide-duplicate)"
            );
            allSlides.innerHTML =
                allSlidesItems.length < 10
                    ? `0${allSlidesItems.length}`
                    : allSlidesItems.length;
        },
        slideChange: function (swiper) {
            const currentSlide = document.querySelector(
                ".fraction-controll__current"
            );
            currentSlide.innerHTML =
                swiper.realIndex + 1 < 10
                    ? `0${swiper.realIndex + 1}`
                    : swiper.realIndex + 1;
        },
    },
});