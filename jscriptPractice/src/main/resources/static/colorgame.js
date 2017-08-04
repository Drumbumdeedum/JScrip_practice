var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var stripe = document.querySelector("#stripe");

colorDisplay.textContent = pickedColor;
messageDisplay.textContent = "Guess the color!";

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      resetButton.textContent = "Play again?";
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!"
    }
  });
}

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickRandomColor(){
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function generateRandomColors(number){
  var arr = [];
  for(var i = 0; i < number; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random()* 256);
  var blue = Math.floor(Math.random()* 256);
  var green = Math.floor(Math.random()* 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickRandomColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "Guess the Color!"

});

easyButton.addEventListener("click", function(){
  numberOfSquares = 3;
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickRandomColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  messageDisplay.textContent = "Guess the Color!"
});

hardButton.addEventListener("click", function(){
  numberOfSquares = 6;
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickRandomColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
  messageDisplay.textContent = "Guess the Color!"
});
