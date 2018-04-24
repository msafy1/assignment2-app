//initialize skrollr.js
var s = skrollr.init();

//have window expand from middle for final infographic
window.onload = function() {
	document.getElementById("preloader").style.display = 'none';
	skrollr.init({
		forceHeight: false
	});
}