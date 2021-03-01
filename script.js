//  wrap every letter in a span
var textWrapper = document.querySelector(".section__title--intro");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
	.add({
		targets: '.section__title--intro .letter',
		scale: [4, 1],
		opacity: [0, 1],
		translateZ: 0,
		easing: "easeOutExpo",
		duration: 10,
		delay: (el, i) => 80*i
	});

function openResume() {
	window.open("files/NelsonRodriguezSpring2021_Final.pdf");
}
	  
document.getElementById("resumeButton").style.background='#000000';
