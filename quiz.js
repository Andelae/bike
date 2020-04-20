/*CREATE FUNCTION TO SETUP QUIZ */
function setupQuiz() {
  let quizForm = document.querySelector(".quizForm");

  quizForm.addEventListener("submit", checkAnswer);
}

/*CREATE FUNCTION FOR ANSWERS */
function checkAnswer(event) {
  /*DoN'T SUBMIT THE FORM TO SERVER*/
  event.preventDefault();

  let correctAnswers = ["a", "a", "a"];
  let form = document.querySelector(".quizForm");
  let result = document.querySelector(".result");

  //   let bikeOne = "cruiser";
  //   let bikeTwo = "mountain";
  //   let bikeThree = "road";

  /* CHECK USERS ANSWERS TO CORRECT*/
  var answerBoxOne = document.querySelector('input[name="q1"]');
  var userAnswerOne = answerBoxOne.value;

  var answerBoxTwo = document.querySelector('input[name="q2"]');
  var userAnswerTwo = answerBoxTwo.value;

  var answerBoxThree = document.querySelector('input[name="q3"]');
  var userAnswerThree = answerBoxThree.value;

  //   var submitButton = document.querySelector('input[type="submit"]');
  //   var correctAnswer = submitButton.getAttribute("data-answer");

  /* IF/ELSE TO GIVE RESULTS*/
  if (userAnswerOne == correctAnswers) {
    result.innerHTML = '<span class="bike">Crusier Bike!</span>';
  }
  if (userAnswerTwo == correctAnswers) {
    result.innerHTML = '<span class="bike">Mountain Bike!</span>';
  }
  if (userAnswerThree == correctAnswers) {
    result.innerHTML = '<span class="bike">Road Bike!</span>';
  }

  // Make the result visible
  result.style.display = "block";
  // result.getElementsByClassName(".bike").style.display = "block";
}
setupQuiz();
