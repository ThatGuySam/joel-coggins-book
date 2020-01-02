import './turn'

/*
 * Basic sample
*/


const $flipbook = $('.flipbook')
const $previousButton = $('.flipbook-previous')
const $nextButton = $('.flipbook-next')

const calculateDimenstions = function () {
	const basis = Number(getComputedStyle($flipbook[0]).getPropertyValue('--basis'))

	return {
		width: 0.922 * basis * $(window).width(), 
		height: 0.600 * basis * $(window).width()
	}
}

const { initialWidth, initialHeight } = calculateDimenstions()

$flipbook.turn({
	// Width

	width: initialWidth,
	
	// // // Height

	height: initialHeight,

	// Elevation

	elevation: 50,
	
	// Enable gradients

	gradients: true,
	
	// Auto center this flipbook

	autoCenter: true

})

$previousButton.click(function () {
	$flipbook.turn("previous")
})

$nextButton.click(function () {
	$flipbook.turn("next")
})

// Resize book when window resizes
$( window ).resize(function() {
	console.log('window resized')
	const { width, height } = calculateDimenstions()
	// $('.flipbook').turn("resize")
	$flipbook.turn('size', width, height)
})