var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");
var correctAnswer = ""
var timeLeft = 75

correctAnswer = document.getElementById("answer0").innerHTML


function checkAnswer(event) {
    let answer = event.target.innerHTML

    if (answer === correctAnswer) {
        document.getElementById("correctAnswer").style.display = 'block';
    } else {
        document.getElementById("wrongAnswer").style.display = 'block';
     }
}

function startGame() {
    var question = document.getElementById("question-container")
    question.style.display = "block";

    document.getElementById("before-start").style.display = "none";

    let choices = document.getElementById("question-answers0").children

    for (let index = 0; index < choices.length; index++) {
        const element = choices[index];

        element.addEventListener("click", checkAnswer)


    }















    // var gameInterval = setInterval(() => {
    //     timerSpan.textContent = timeLeft--;


    //     if (!timeLeft) {
    //         clearInterval(gameInterval);
    //         window.location.href = "highscore.html";

    //     }
    // }, 1000);


}

startButton.addEventListener("click", startGame);
