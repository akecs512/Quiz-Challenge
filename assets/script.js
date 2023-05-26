var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");
var correctAnswer = ""
var timeLeft = 75
// call this an index, since it starts at 0
var currentQuestionIndex = 0
var totalQuestions = 2
var containerString = "question-container"

correctAnswer = document.getElementById("answer0").innerHTML


function checkAnswer(event) {
    let answer = event.target.innerHTML

    if (answer === correctAnswer) {
        document.getElementById("correctAnswer").style.display = 'block';
    } else {
        document.getElementById("wrongAnswer").style.display = 'block';
    }

    // question count needs to match up with the index count
    if (currentQuestionIndex < totalQuestions - 1) {
        displayNextQuestion()
    } else {
        window.location.href = "/highscoreentry.html"
    }

}

function displayQuestion(questionID) {
    var question = document.getElementById(containerString + questionID)
    question.style.display = "block";
    let choices = document.getElementById(containerString + questionID).children

    for (let index = 0; index < choices.length; index++) {
        const element = choices[index];
        element.addEventListener("click", checkAnswer)
    }
}
function displayNextQuestion() {
    hideQuestion(currentQuestionIndex)
    currentQuestionIndex++
    displayQuestion(currentQuestionIndex)

}

function startGame() {
    document.getElementById("before-start").style.display = "none";
    displayQuestion(0)

    // var gameInterval = setInterval(() => {
    //     timerSpan.textContent = timeLeft--;


    //     if (!timeLeft) {
    //         clearInterval(gameInterval);
    //         window.location.href = "highscore.html";

    //     }
    // }, 1000);


}
function hideQuestion(questionID) {
    document.getElementById(containerString + questionID).style.display = "none";
}


startButton.addEventListener("click", startGame);

