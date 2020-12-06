var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var answerElement = document.getElementById('answer-buttons')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var nextQuestion = document.getElementById('next-question')



// var score = {
//     score: mostRecentScore,
//     name: userInitials.value
// }

startButton.addEventListener('click', function(){

    countdown()


})

function countdown() {

    var counter = 60;

    var timer = document.getElementById('timer');
    timer.innerHTML = counter

    function timeIt() {
        counter--;
        timer.innerHTML = counter;
        if (counter === 0) {
            alert("Game Over");
         if   (counter -- === 0){
             clearInterval(countdown)
         }
        }

    }

   var countdown = setInterval(timeIt, 1000)
}

startButton.addEventListener('click', startGame)

// Trying to set the deduction for wrong answers

if (questions.answers.correct === false);
{
counter -= 3;
timer.innerHTML = counter
}

var shuffledQuestions, currentQuestionIndex

function startGame(){



    startButton.classList.add('hidden')
    questionContainerElement.classList.remove('hidden')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}




function showQuestion(question){

    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        var button = document.createElement('button')
        button.innerText = answer.text
        // button.setAttribute("id","next-question")
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

// nextQuestion.addEventListener('click', () =>{
//     currentQuestionIndex++
//     setNextQuestion()
// })

function resetState(){
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    currentQuestionIndex++
questionElement.innerHTML = "";
answerButtonsElement.innerHTML ="";
showQuestion(shuffledQuestions[currentQuestionIndex])
}

var questions = [
{
    question: "What is the best car in the world?",
    answers: [
        {text: 'Ferrari', correct: true},
        {text: 'Maserati', correct: false},
        {text: 'Honda', correct: false},
        {text: 'Toyota', correct: false}
    ]
},
    {
        question: "What is the best beer in the World?",
        answers: [
            {text: 'Corona', correct: false},
            {text: 'Heineken', correct: false},
            {text: 'Bud Light', correct: true},
            {text: 'Carslberg', correct: false}
        ]
    },
        {
            question: "What is the World's tallest building?",
            answers: [
                {text: 'Empire State', correct: false},
                {text: 'Twin Towers', correct: false},
                {text: 'Burj Khalifa', correct: true},
                {text: 'Taipei 101', correct: false}
            ]
        },
            {
                question: "Who won the election?",
                answers: [
                    {text: 'Biden', correct: true},
                    {text: 'Trump', correct: false},
                    {text: 'Trump Jr.', correct: false},
                    {text: 'Melania', correct: false}
                ]
            }
            ]

            // localStorage.setItem("highScores", JSON.stringify([]))
            // JSON.parse(localStorage)