/**************************** swiper intialis */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        911: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

/***************** end swiper slider */

/* custom js code*/
let navigation = document.querySelector('.navigation'),
    nav_icon = document.querySelector('.navigation .menu-icon'),
    video_frame = document.getElementById('play'),
    film = document.querySelector('video'),

    load = document.querySelector('.load');

///////////// loading animation
window.addEventListener('load', (event) => {
    load.style.display = 'none';
    document.querySelector('body').classList.add('loading');
});

//// playing film
nav_icon.addEventListener('click', () => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navigation.classList.add('fix_icon');
        } else {
            navigation.classList.remove('fix_icon');
        }
    });
    navigation.classList.toggle('fix_icon');
});

/**progress bar */
let scrollprecentage = () => {
    let progressbar = document.getElementById('progress'),
        pos = document.documentElement.scrollTop;
    calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrollvalue = Math.round(pos * 100 / calcHeight);
    progressbar.style.background = `conic-gradient(#e70634 ${scrollvalue}%,#2b2f38 ${scrollvalue}%)`;
}
window.onscroll = scrollprecentage;
window.onload = scrollprecentage;
