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

// project 슬라이드 : Swiper #Default와 #Navigation 사용으로 이동에 편하게 적용
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 타이핑효과, 동작 후 멈춤
const content = "web publisher leesumin";
const text = document.querySelector(".typing");
let index = 0;
let typingInterval;

function typing() {
    text.textContent += content[index++];
    if (index >= content.length) {
        clearInterval(typingInterval);
    }
}
// 타이핑 속도
typingInterval = setInterval(typing, 250);

