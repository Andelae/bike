/*FUNCTION TO CALL FROM HTML*/
function submitAnswers() {
  //NUMBER OF QUESTIONS
  var total = 3;
  //VARIABLE FOR ANSWER
  var bike;

  // GET USERS INPUT
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;

  // CORRECT ANSWERS
  var answers = ["a", "a", "a"];

  /*CHECK ANSWERS USING LOOP*/
  for (i = 1; i <= total; i++) {
    if (q1 == answers[0]) {
      bike = "CRUISER";
    }
    if (q2 == answers[1]) {
      bike = "MOUNTAIN";
    }
    if (q3 == answers[2]) {
      bike = "ROAD";
    }
  }

  /* DISPLAY RESULTS*/
  var results = document.getElementById("results");
  results.innerHTML = "<h3>You got a <span>" + bike + "</span> Bike!</h3>";
  // STOPS QUESTIONS FROM RUNNING
  return false;
}
