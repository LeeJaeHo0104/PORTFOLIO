//로고
const lottie = bodymovin.loadAnimation({
    container : document.querySelector('.logo'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/logo.json',
});

//마우스
const mouse = bodymovin.loadAnimation({
    container : document.querySelector('.mouse_ani'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/mouse.json',
});

/* ========== ABOUT ========== */
const aboutMainAni = bodymovin.loadAnimation({
	container : document.querySelector('.about_ani_4'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/skill_effect_1.json',
});
/* ========== ABOUT ========== */

/* ========== project1 ========== */
//경찰차
const policeCar = bodymovin.loadAnimation({
	container : document.querySelector('.police_car'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/policecar.json',
});
//pr1 ani1
const pr1Ani1 = bodymovin.loadAnimation({
	container : document.querySelector('.pr1_ani'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/pr1_ani1.json',
});
/* ========== project1 ========== */


/* ========== project2 ========== */
//피자 오토바이
const pizzaAutoby = bodymovin.loadAnimation({
	container : document.querySelector('.pizza_autoby'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/pizzaautoby.json',
});
//pr2 ani1
const pr2Ani1 = bodymovin.loadAnimation({
	container : document.querySelector('.pr2_ani'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/pr2_ani1.json',
});
/* ========== project2 ========== */

/* ========== project3 ========== */
//차
const car = bodymovin.loadAnimation({
	container : document.querySelector('.pr3_car'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/money.json',
});
const greenAni = bodymovin.loadAnimation({
	container : document.querySelector('.green_ani'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/green_ani.json',
});
/* ========== project3 ========== */



/* ========== contact ========== */
const nameEffect = bodymovin.loadAnimation({
	container : document.querySelector('.name_effect'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/name_effect.json',
});
const titleEffect = bodymovin.loadAnimation({
	container : document.querySelector('.contact_title_ani'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/contact1.json',
});
/* ========== contact ========== */

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
/* ========== 프로젝트1 변수 ========== */

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


const pc2FullPage = document.querySelector('.pc2_full_page');
const m2FullPage = document.querySelector('.m2_full_page');
/* ========== 프로젝트2 변수 ========== */

pc2FullPage.addEventListener('mouseenter', function(){
	pc2FullPage.style.backgroundPosition = 'center 100%';
});
pc2FullPage.addEventListener('mouseleave', function(){
	pc2FullPage.style.backgroundPosition = 'center 0%';
});
m2FullPage.addEventListener('mouseenter', function(){
	m2FullPage.style.backgroundPosition = 'center 100%';
});
m2FullPage.addEventListener('mouseleave', function(){
	m2FullPage.style.backgroundPosition = 'center 0%';
});


const pc3FullPage = document.querySelector('.pc3_full_page');
/* ========== 프로젝트3 변수 ========== */
pc3FullPage.addEventListener('mouseenter', function(){
	pc3FullPage.style.backgroundPosition = 'center 100%';
});
pc3FullPage.addEventListener('mouseleave', function(){
	pc3FullPage.style.backgroundPosition = 'center 0%';
});


//스킬바 애니메이션
const circles = document.querySelectorAll('.circular-pbar');
circles.forEach((el) => {
    const counter = el.querySelector('.circular-pbar-counter');
    console.log('counter: ', counter.textContent);
    const tg = counter.textContent+"%";
    const tm = gsap.timeline({
        defaults : {
            duration : 4,
            ease : 'expo.out',
        },
        scrollTrigger : {
            trigger : el,
            toggleActions : 'play pause resume reset',
        }
    });
    tm.from(counter, {
        textContent : 0,
        modifiers : {
            textContent : (textContent) => {
                return textContent.toFixed();
            },
        },
    });
    tm.to(el, {
        '--p' : tg,
    }, 0);
});