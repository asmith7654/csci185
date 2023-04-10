const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;


/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    document.getElementsByClassName('current-photo')[0].innerHTML = '<img src="' + photos[idx] + '"alt="current photo" />'
    document.getElementsByClassName('caption')[0].innerHTML = 'Image ' + (idx + 1) + ' of ' + photos.length;
    console.log('show image');
    //1. target the img element and change its src to the image inside photos that is at slot idx
    //target the caption and tell the user which photo theyre looking at
}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    console.log('forward');
    //figure out if/else statement wrap around
    ++idx;
    if (idx == photos.length) {
        idx = 0
       }
       showImage();
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    console.log('back');
    --idx;
    
    if (idx == -1) {
        idx = photos.length - 1;
       }
       showImage();
}
