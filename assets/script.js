var startButton = document.getElementById("start-button");
var quizFinish = document.getElementById('quizFinish')
var submitButton = document.getElementById("submit-button");
var highScores = document.getElementById('highScores')
var answers = document.getElementById('answers')
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");
var scorebar = document.getElementById("scores-bar");
var quizIntro = document.getElementById('quizIntro')
var questionTitle = document.getElementById('question-title');
var quiz = document.getElementById('quiz')
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var scores = document.getElementById("scores");
var answerCheck = document.getElementById('answer-check');
var timeLeft = 120;
var questionIndex = 0;
var currentScore = 0;
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        options: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        options: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "b. other arrays"
    },
    {
        question: "Commonly used data types DO NOT include:",
        options: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "How do you create a function in JavaScript",
        options: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b. function myFunction()"
    },
];

function startGame() {
    questionIndex = 0;

    quizIntro.style.display = "none";
    quiz.style.display = "block";

    answerQuestion();
}

function answerQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    answerA.textContent = questions[questionIndex].options[0];
    answerB.textContent = questions[questionIndex].options[1];
    answerC.textContent = questions[questionIndex].options[2];
    answerD.textContent = questions[questionIndex].options[3];
    answerA.addEventListener("click", chooseA);
    answerB.addEventListener("click", chooseB);
    answerC.addEventListener("click", chooseC);
    answerD.addEventListener("click", chooseD);
}

function checkAnswer(answer) {
    answerCheck.style.display = "block";
    if (questions[questionIndex].answer === questions[questionIndex].options[answer]) {
        currentScore++;
        answerCheck.textContent = "Correct!";
    } else {
        timeLeft -= 10;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    if (questionIndex < questions.length) {
        answerQuestion();
    } else {
        endGame();
    }
}

function chooseA() { checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }
function chooseD() { checkAnswer(3); }

function endGame() {
    quiz.style.display = "none"
    answerCheck.style.display = 'block'
    quizFinish.style.display = "block"
}

function scores () {
    quizFinish.style.display = "none"
    highScores.style.display = 'block'
}

startButton.addEventListener("click", startGame)