const FixWidth = function trackWidth() {
	let w = window.outerWidth;
	let width = w - 30;
	let resultWidth = document.getElementById('results_overview');
	let resultInWidth = document.getElementById('result_ingredients');

	console.log('w: ', w);
	console.log('width: ', width);

	if (resultWidth) {
		resultWidth.setAttribute('style', 'width:' + width + 'px');
		resultInWidth.setAttribute('style', 'width:' + width + 'px');
	}
};

export default FixWidth;
