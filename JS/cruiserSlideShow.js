/* IMAGES FOR SLIDESHOW */
var imgArray = [
  "./bikeImages/cruiser2.jpg",
  "./bikeImages/cruiser4.jpg",
  "./bikeImages/cruiser6.jpg",
  "./bikeImages/cruiser7.jpg",
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
