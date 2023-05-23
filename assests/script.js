var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");

var timeLeft =  75

function startGame() {
    var gameInterval = setInterval(() => {
        timerSpan.textContent = timeLeft --;

    if (!timeLeft) {
        clearInterval(gameInterval);
        window.location.href = "highscore.html";
    } 
    }, 1000);
}

startButton.addEventListener("click", startGame);
