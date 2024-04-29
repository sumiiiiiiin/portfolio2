// AOS
AOS.init();

// 스크롤시 header의 nav_bar 이벤트 발생
function handleScroll() {
  const header = document.querySelector('header');

  if (window.scrollY > 150) {
    header.style.height = '10vh';
    header.style.lineHeight = '8vh';
    header.style.margin = '0 auto';
  } else {
    header.style.height = '16vh';
    header.style.lineHeight = 'initial';
    header.style.margin = 'initial';
  }
}
// 스크롤 이벤트를 감지하여 핸들러 함수 호출
window.addEventListener('scroll', handleScroll);


// 좌우 이미지 영역 스크롤 시 애니메이션 실행 코드
// Intersection Observer를 사용하여 스크롤 이벤트 감지
const sideIntro = document.querySelector('.side_intro');
const leftImg = document.querySelector('.left_img');
const rightImg = document.querySelector('.right_img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      leftImg.style.animation = 'move1 2.7s forwards';
      rightImg.style.animation = 'move2 2.7s forwards';
    } else {
      leftImg.style.animation = 'none';
      rightImg.style.animation = 'none';
    }
  });
});

observer.observe(sideIntro);

// AOS실행될 때 gif어두워지기
// 페이지 로딩 시 실행될 코드
  window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('brightenImage').style.filter = 'brightness(0.5)';
    }, 600); // 몇초 후에 이미지 밝기 조절
});
