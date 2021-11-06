const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    keyboard:true,
    autoplay: {
      delay: 10000,
      disableOnInteraction:false
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  