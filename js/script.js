
const btnClick = document.querySelector('.toggle-btn');
const menuShow = document.querySelector('header .mobile');
let toggleState = false;
btnClick.addEventListener('click', ()=>{
    toggleState = !toggleState;
    if(toggleState){
        btnClick.classList.add('active');
        menuShow.classList.add('active');
    }else{
        btnClick.classList.remove('active');
        menuShow.classList.remove('active');
    }
})


new Swiper(".main-swiper .swiper", {
    direction: 'horizontal',
    loop: true,
    autoplay : {
        delay : 3000
    },
    navigation: {
      nextEl: ".main-swiper .swiper-next",
      prevEl: ".main-swiper .swiper-prev",
    },
});

new Swiper(".product-swiper .swiper", {
    direction: 'horizontal',
    loop: true,
    autoplay : {
        delay : 3000
    },
    navigation: {
      nextEl: ".product-swiper .swiper-next",
      prevEl: ".product-swiper .swiper-prev",
    },
    slidesPerView: 1, //한 번에 보여지는 슬라이드 개수
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 4,
          spaceBetween: 10
        }
      }
});

