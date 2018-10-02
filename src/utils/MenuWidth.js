const FixWidth = function trackWidth() {
	let w = window.outerWidth;
	let width = w - 30;
	let resultWidth = document.getElementById('results_overview');
	let resultInWidth = document.getElementById('result_ingredients');

	if (w >= 710) {
		width = w - 215;
	}

	console.log('w: ', w);
	console.log('width: ', width);
	// console.log('resultWidth', resultWidth);
	if (resultWidth) {
		resultWidth.setAttribute('style', 'width:' + width + 'px');
		resultInWidth.setAttribute('style', 'width:' + width + 'px');
	}
};

export default FixWidth;
