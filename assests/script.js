var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");

var timeLeft = 75

function startGame() {
    var question = document.getElementById("question-container")
    question.style.display = "block";
    console.log({ question })

    var gameInterval = setInterval(() => {
        timerSpan.textContent = timeLeft--;


        if (!timeLeft) {
            clearInterval(gameInterval);
            window.location.href = "highscore.html";

        }
    }, 1000);


}

startButton.addEventListener("click", startGame);
