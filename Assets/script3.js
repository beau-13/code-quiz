var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var answerElement = document.getElementById("answer-buttons");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var nextQuestion = document.getElementById("next-question");
// global interval variable, it will store the return value of the setInterval
var interval;
var shuffledQuestions, currentQuestionIndex;
var counter = 60;
var scoreObj = {
  score: 0,
  name: "",
};
var questions = [
  {
    question: "What is the best car in the world?",
    answers: [
      { text: "Ferrari", correct: "correct" },
      { text: "Maserati", correct: "incorrect" },
      { text: "Honda", correct: "incorrect" },
      { text: "Toyota", correct: "incorrect" },
    ],
  },
  {
    question: "What is the best beer in the World?",
    answers: [
      { text: "Corona", correct: "incorrect" },
      { text: "Heineken", correct: "incorrect" },
      { text: "Bud Light", correct: "correct" },
      { text: "Carslberg", correct: "incorrect" },
    ],
  },
  {
    question: "What is the World's tallest building?",
    answers: [
      { text: "Empire State", correct: "incorrect" },
      { text: "Twin Towers", correct: "incorrect" },
      { text: "Burj Khalifa", correct: "correct" },
      { text: "Taipei 101", correct: "incorrect" },
    ],
  },
  {
    question: "Who won the election?",
    answers: [
      { text: "Biden", correct: "correct" },
      { text: "Trump", correct: "incorrect" },
      { text: "Trump Jr.", correct: "incorrect" },
      { text: "Melania", correct: "incorrect" },
    ],
  },
];
// localStorage.setItem("highScores", JSON.stringify(score));
// var higheScore = JSON.parse(localStorage.getItem("highScores"));
function countdown() {
  //   var counter = 60; this has to be a global variable
  var timer = document.getElementById("timer");
  timer.innerHTML = counter;
  function timeIt() {
    counter--;
    timer.innerHTML = counter;
    if (counter === 0) {
      alert("Game Over");
      clearInterval(interval);
    }
  }
  // interval is a global variable now.
  // setInterval returns a number, we use the variable interval to clear the setInterval
  interval = setInterval(timeIt, 1000);
}

function startGame() {
  countdown();
  scoreObj.score = 0;
  currentQuestionIndex = 0;
  startButton.classList.add("hidden");
  questionContainerElement.classList.remove("hidden");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  //   resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function selectAnswer(e) {
  currentQuestionIndex++;
  questionElement.innerHTML = "";
  answerButtonsElement.innerHTML = "";
  // IN HERE YOU HAVE TO GET THE "data-answer" attribute and check if it correct or not
  var answer = this.getAttribute("data-answer");
  var correctAnswer = document.createElement("div");
  if (answer === "correct") {
    correctAnswer.innerHTML = "Correct";
    scoreObj.score = scoreObj.score + 1;
  } else {
    scoreObj.score = scoreObj.score - 1;
    counter -= 3;
    timer.innerHTML = counter;
    correctAnswer.innerHTML = "Incorrect";
  }
  questionContainerElement.appendChild(correctAnswer);
  // if no more questions go to viewScore
  if (currentQuestionIndex > shuffledQuestions.length - 1) {
    scoreObj.name = prompt("What's your name?");
    localStorage.setItem("highScores", JSON.stringify(scoreObj));
    window.location.assign("highscore.html");
  } else {
    // I still have questions.
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }
}
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    // button.setAttribute("id","next-question")
    button.classList.add("btn");
    // ATTACH AN ATTRIBUTE TO EACH BUTTON
    // LIKE SO button.setAttribute("data-answer", answer.correct);
    button.setAttribute("data-answer", answer.correct);
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
// We attach 2 handlers to the start button click event
startButton.addEventListener("click", startGame);
// startButton.addEventListener("click", countdown);