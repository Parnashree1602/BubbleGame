var timer = 60;
var score = 0;
var randomGenerated = 0;
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 189; i++) {
    var rand = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rand}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>GAME OVER!</h1>`;
    }
  }, 1000);
}
function getNewHit() {
  randomGenerated = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = randomGenerated;
}
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clicked = Number(details.target.textContent);
  if (clicked === randomGenerated) {
    increaseScore();
    getNewHit();
    makeBubble();
  }
});
makeBubble();
runTimer();
getNewHit();
