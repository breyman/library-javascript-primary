// library of common Javascript functionality used by Brian Reyman.

// replace current image with new image
function changeImage(myImage, myElement) {
	let currentImage = myImage;
	let img = document.getElementById(myElement);
	img.src = myImage;
	return false;
}

// show/display all passed elements
function showContent(...contentToDisplay) {
	for (let myContent of contentToDisplay) {
		// grab everything to show
		let ShowContents = document.querySelectorAll(myContent);

		// loop through the buttons using for..of and hide them
		for (let showContent of ShowContents) {
			showContent.style.display = 'block';
		}
	}
}

// hide all passed elements
function hideContent(...contentToHide) {
	for (let myContent of contentToHide) {
		// grab everything to show
		let HideContents = document.querySelectorAll(myContent);

		// loop through the buttons using for..of and hide them
		for (let hideContent of HideContents) {
			hideContent.style.display = 'none';
		}
	}
}
