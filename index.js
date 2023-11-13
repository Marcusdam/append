
  AOS.init();

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let menuIcon = document.getElementById('menu-btn');
  let menuBox = document.getElementById('menu');
  
  function menuBtn() {
      menuBox.classList.toggle("open-menu");
  
      if(menuBox.classList.contains("open-menu")){
          menuIcon.src="img/close.png"
      }
  
      else{
          menuIcon.src="img/open (1).png"
      }
      console.log("clicked")
  };
