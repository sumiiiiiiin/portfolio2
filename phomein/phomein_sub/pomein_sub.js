//AOS
AOS.init();

// header가 #FFF배경색 section 도달시 header_nav색상 변경 
document.addEventListener("DOMContentLoaded", function () {
    // header 요소를 선택
    var header = document.querySelector("header");
    // main 다음 section 요소 선택
    var nextSection = document.querySelector(".overview");
    // header의 높이를 구하기.
    var headerHeight = header.offsetHeight;
    // 스크롤 이벤트
    window.addEventListener("scroll", function () {
      // 현재 스크롤 위치
      var scrollPosition = window.scrollY;
      // main 다음 section의 top 위치 구하기
      var nextSectionTop = nextSection.offsetTop;
      // header가 main 다음 section의 top에 도달하면 배경색 변경
      if (scrollPosition >= nextSectionTop - headerHeight) {
        header.style.backgroundColor = "#FFF";
      } else {
        header.style.backgroundColor = "#F3F8FF";
      }
    });
  });
  