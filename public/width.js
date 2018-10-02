function trackWidth() {
	let w = window.outerWidth;
	let width = w - 30;
	let resultWidth = document.getElementById('results_overview');
	let resultInWidth = document.getElementById('result_ingredients');
	let menu = document.getElementById('menu');
	if (menu) {
		if (w >= 710) {
			width = w - 215;
		}
		resultWidth.setAttribute('style', 'width:' + width + 'px');
		resultInWidth.setAttribute('style', 'width:' + width + 'px');
	}

	if (resultWidth) {
		resultWidth.setAttribute('style', 'width:' + width + 'px');
		resultInWidth.setAttribute('style', 'width:' + width + 'px');
	}
}
