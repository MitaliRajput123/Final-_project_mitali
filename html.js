const header = document.querySelector("header");

Window.addEventlistener ("scroll" , function(){
    header.classList.toggle("sticky" , window.scrollY >0);
});

var swiper = new swiper(".Review-slider" , {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        600: {
            slidesPreview: 1,
        },
        700: {
            slidesPreview: 2,
        },
        1000: {
            slidesPreview: 3,
        },
    },
});
 
