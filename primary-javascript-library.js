// library of common Javascript functionality used by Brian Reyman.


// replace current image with new image
function changeImage(myImage, myElement){
	currentImage = myImage;	
	var img = document.getElementById(myElement);
	img.src = myImage;
	return false;
}