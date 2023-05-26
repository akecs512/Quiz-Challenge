var initialsForm = document.getElementById("initials-form");
if (initialsForm)
  initialsForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
  // so that we can do some work on the form.
  event.preventDefault();

  let initials = document.getElementById("initials").value

  let playerScores = JSON.parse(localStorage.getItem("playerScores"))
  if (!playerScores) playerScores = []

  // push modifies the array in place
  // playerScores.push({ initials, score: timeLeft })
  playerScores.push({ initials})
  localStorage.setItem("playerScores", JSON.stringify(playerScores))

  // clear out the form.
  initialsForm.reset()
  window.location.href = "highscores.html";
}

