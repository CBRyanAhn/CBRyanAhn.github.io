// Set up the image files to be used.

var theImages = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array.
theImages[0] = 'CB_photo1.jpg'

// do not edit anything below this line

var j = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));

function showImage(){
    var mainImgObj = document.querySelector("#mainImg");
    mainImgObj.src = 'my_photos/' + theImages[whichImage];
    // document.write('<img src="'+theImages[whichImage]+'" class="right" border="1" width="200" height="200" vspace="0">');
}

showImage();
