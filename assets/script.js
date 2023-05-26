var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");
var correctAnswer = ""
var timeLeft = 75
// call this an index, since it starts at 0
var currentQuestionIndex = 0
var totalQuestions = 5
var containerString = "question-container"


function checkAnswer(event) {
    let answer = event.target.innerHTML

    if (answer === correctAnswer) {
        document.getElementById("correctAnswer").style.display = 'block';
        document.getElementById("wrongAnswer").style.display = 'none';
    } else {
        document.getElementById("wrongAnswer").style.display = 'block';
        document.getElementById("correctAnswer").style.display = 'none';
    }

    // question count needs to match up with the index count
    if (currentQuestionIndex < totalQuestions - 1) {
        displayNextQuestion()
    } else {
        window.location.href = "/highscoreentry.html?timeLeft=" + timeLeft
    }
}

function displayQuestion(questionID) {
    correctAnswer = document.getElementById("answer" + questionID).innerHTML
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
    timerSpan.innerHTML = timeLeft

    gameInterval = setInterval(() => {
        timerSpan.innerHTML = --timeLeft;
        if (!timeLeft) {
            clearInterval(gameInterval);
            window.location.href = "/highscoreentry.html?timeLeft=" + timeLeft
        }
    }, 1000);

}

function hideQuestion(questionID) {
    document.getElementById(containerString + questionID).style.display = "none";
}

startButton.addEventListener("click", startGame);

