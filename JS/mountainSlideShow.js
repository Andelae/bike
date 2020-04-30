/* IMAGES FOR SLIDESHOW */
var imgArray = [
  "./bikeImages/mountain2.jpg",
  "./bikeImages/mountain3.jpg",
  "./bikeImages/mountain4.jpg",
  "./bikeImages/mountain5.jpg",
];

/*CURRENT IMAGE*/
var i = 0;

/*DISPLAY TIME FOR IMAGES*/
var timeLapse = 3000;

/*CALLING FUNCTION TO MAKE SLIDE HAPPEN*/
function slideShow() {
  document.getElementById("slide").src = imgArray[i];
  i++;
  if (i == imgArray.length) {
    i = 0;
  }
  setTimeout("slideShow()", timeLapse);
}
slideShow();
