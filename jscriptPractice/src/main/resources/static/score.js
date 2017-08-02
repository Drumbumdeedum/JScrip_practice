var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var maxScore = document.getElementById("maxScore");
var h1 = document.querySelector("h1");
var input = document.querySelector("input");

var gameOver = false;
var winningScore = 5;

var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function(){
  if(!gameOver) {
    p1Score++;
    if(p1Score === winningScore){
      gameOver = true;
      p1Display.classList.add("winner");
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function(){
  if(!gameOver) {
    p2Score++;
    if(p2Score === winningScore){
      gameOver = true;
      p2Display.classList.add("winner");
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function(){
  reset();
});

numInput.addEventListener("change", function(){
  maxScore.textContent = Number(input.value);
  winningScore = Number(input.value);
  reset()
});

function reset () {
  p1Score = 0;
  p1Display.textContent = p1Score;
  p1Display.classList.remove("winner");
  p2Score = 0;
  p2Display.textContent = p2Score;
  p2Display.classList.remove("winner");
  gameOver = false;
}
