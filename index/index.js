//AOS
AOS.init();

// 스크롤에 따른 header 변화
$(document).ready(function() {
    function handleScroll() {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    }
    $(window).scroll(handleScroll);

    handleScroll();
});

// 슬라이드2
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
