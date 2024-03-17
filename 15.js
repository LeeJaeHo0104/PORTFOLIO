
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
// gsap.to(sections, {
// 	xPercent: -100 * (sections.length - 1),
// 	ease: 'none',
// 	scrollTrigger: {
// 		trigger: '.horizontal2',
// 		pin: true,
// 		scrub: 1,
// 		snap: 1 / (sections.length - 1),
// 		end: () => '+=' + document.querySelector('.horizontal2').offsetWidth,
// 	},
// });

//로티 로고
const lottie = bodymovin.loadAnimation({
    container : document.querySelector('.logo'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : './img/logo.json',
});