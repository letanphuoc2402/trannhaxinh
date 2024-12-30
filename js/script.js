

  var swiperSlide = new Swiper(".swiperSlide", {});
 // Swiper 1 (mySwiper-2)


var swiper_tran_xuyen_sang = new Swiper('.swiper-tran-xuyen-sang', {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next-showroom',
        prevEl: '.swiper-button-prev-showroom',
    },
    pagination: {
        el: '.swiper-pagination-tran-xuyen-sang',
        clickable: true,
    },
    loop: true,
    breakpoints: {
        320: { // Điện thoại
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: { // Tablet
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: { // Laptop
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1280: { // Desktop
            slidesPerView: 4,
            spaceBetween: 25,
        },
    },
});

// Swiper 2 (mySwiper-3)
var swiper3 = new Swiper('.mySwiper-3', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
        320: { // Điện thoại
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: { // Tablet
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: { // Laptop
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
// Swiper 2 (mySwiper-3)
var articleSwiper = new Swiper('.articleSwiper', {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
        320: { // Điện thoại
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: { // Tablet
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: { // Laptop
            slidesPerView: 3,
            spaceBetween: 0,
        },
    },
});