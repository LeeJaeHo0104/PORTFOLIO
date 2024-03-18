
//gsap 가로스크롤
let sections = gsap.utils.toArray('.section');

gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: 'none',
	scrollTrigger: {
		trigger: '.horizontal',
		pin: true,
		scrub: 1,
		snap: 1 / (sections.length - 1),
		end: () => '+=' + document.querySelector('.horizontal').offsetWidth,
	},
});

//프로젝트1 사이트 사진 호버
const pc1FullPage = document.querySelector('.pc1_full_page');
const m1FullPage = document.querySelector('.m1_full_page');
/* ========== 변수 ========== */

pc1FullPage.addEventListener('mouseenter', function(){
	pc1FullPage.style.backgroundPosition = 'center 100%';
});
pc1FullPage.addEventListener('mouseleave', function(){
	pc1FullPage.style.backgroundPosition = 'center 0%';
});
m1FullPage.addEventListener('mouseenter', function(){
	m1FullPage.style.backgroundPosition = 'center 100%';
});
m1FullPage.addEventListener('mouseleave', function(){
	m1FullPage.style.backgroundPosition = 'center 0%';
});

//로티 로고
const lottie = bodymovin.loadAnimation({
    container : document.querySelector('.logo'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/codelogo.json',
});