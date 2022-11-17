var startButton = document.getElementById("start-button");
var quizIntro = document.getElementsByClassName("quizIntro");
var quizSection = document.getElementsByClassName("quizSection");
var answerA = document.getElementById("#a");
var answerB = document.getElementById("#b");
var answerC = document.getElementById("#c");
var answerD = document.getElementById("#d");
var quizFinish = document.getElementsByClassName("quizFinish");
var submitButton = document.getElementById("submit-button");
var highScores = document.getElementsByClassName("highScores");

function startGame() {
    var quizIntro = document.getElementsByClassName("quizIntro").style.display = "none";
    quizSection.style.display = "block";
}

function answerQuestion() {

}

function endGame() {

}

function highScores() {

}

startButton.addEventListener("click", startGame)