var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");

var timeLeft = 75

var questions = [
    { "question": "Commonly used data types do NOT include:", "answers": ["strings", "booleans", "alerts", "numbers"] },
    { "question": "The flight of unladen swallow is:", "answers": ["0 mph", "1_000_000 mph", "Swallows can't fly"] }
]

function startGame() {
    console.log("timeLeft", timeLeft)
    var gameInterval = setInterval(() => {
        console.log("timeLeft", timeLeft)
        timerSpan.textContent = timeLeft--;

        if (!timeLeft) {
            clearInterval(gameInterval);
            window.location.href = "highscore.html";
        }
    }, 1000);
}

if (startButton)
    startButton.addEventListener("click", startGame);

