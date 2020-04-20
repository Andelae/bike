/*START OF QUIZ*/
let takeQuiz = function () {
  /* QUESTIONS FOR QUIZ USING ARRAY*/
  let questions = [
    {
      question:
        "Do you prefer to take things at a slower pace and take stops to enjoy the world around you?",
      choices: [yes, no],
      answer: yes,
    },
    {
      question: "Do you enjoy getting dirty and things to be exciting?",
      choices: [yes, no],
      answer: yes,
    },
    {
      question: "Do you enjoy excercising and going fast?",
      choices: [yes, no],
      answer: yes,
    },
  ];
};

// let correctAnswers = 0;
let question;
let answer;
let response;

function print(message) {
  let quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = message;
}

for (let i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(questions);
  // response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  }
}

html =
  "You got " + +"." + " Now click on the image to learn more about your bike!";
print(html);

// var quizContainer = document.getElementById('quiz');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');

// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
