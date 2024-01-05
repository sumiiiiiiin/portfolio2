// AOS js
AOS.init();

// 스크롤에 따른 nav 변화
$(window).on('scroll', () => {
  // console.log(scrollY);
  if (scrollY > 150) {
    $('header').css({
      width: '80%',
      borderRadius: '25px',
      margin: '0 auto',
      transform: 'translatey(1.5vw)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      opacity: 1,
    });
  } else {
    $('header').css({
      width: '100%',
      opacity: 1,
      borderRadius: '0',
      transform: 'translate(0)',
      // marginTop:'1.5vw'
    });
  }
});

// 햄버거메뉴 열고 닫기
$(function () {
  // 이 코드는 문서가 준비된 상태에서 실행됩니다. 즉, DOM이 완전히 로드된 상태에서 실행됩니다.
  // 'checkbox' 클래스를 가진 요소를 클릭했을 때:
  $('.checkbox').on('click', () => {
    // 'active' 클래스를 가진 span 요소들의 상태를 토글합니다.
    $('.checkmark span').toggleClass('active');

    // 'menu' 클래스를 가진 요소를 슬라이드 토글합니다. (보이거나 숨깁니다.)
    $('.menu').slideToggle(); // == display: block
  });
});


