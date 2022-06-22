// import '../swiper-7.4.1/swiper/swiper-bundle';

const swiper1 = new Swiper('.top',{
    effect:'cube',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: '.swiper-pagination',
    clickable :true,
    },
    speed: 300,
    loop:true,
    autoplay: {
      disableOnInteraction: false,
      
    }
  });
  const swiper2 = new Swiper('.bottom',{
    // effect:'cards',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 300,
    loop:true,
    autoplay: {
      disableOnInteraction: false,
    }
  })