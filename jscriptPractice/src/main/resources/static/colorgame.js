var numberOfSquares = 9;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var mediumButton = document.querySelector("#mediumButton");
var hardButton = document.querySelector("#hardButton");

colorDisplay.textContent = pickedColor;
messageDisplay.textContent = "Guess the color!";

for(var i = 0; i < squares.length; i++){
  if(colors[i]){
    squares[i].style.backgroundColor = colors[i];
  } else {
    squares[i].style.display = "none";
  }
}

for (var i = 0; i < squares.length; i++){
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
  while (arr.length < number) {
    var color = randomColor();
    if(!arr.indexOf(color) > -1){
      arr.push(color);
    }
  }
  return arr;
}

function randomColor(){
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
  numberOfSquares = 4;
  easyButton.classList.add("selected");
  mediumButton.classList.remove("selected");
  hardButton.classList.remove("selected");
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.add("easyMode");
    squares[i].classList.remove("mediumMode");
    squares[i].classList.remove("hardMode");
  }
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

mediumButton.addEventListener("click", function(){
  numberOfSquares = 9;
  easyButton.classList.remove("selected");
  mediumButton.classList.add("selected");
  hardButton.classList.remove("selected");
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.remove("easyMode");
    squares[i].classList.add("mediumMode");
    squares[i].classList.remove("hardMode");
  }
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickRandomColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "inline-block";
    } else {
      squares[i].style.display = "none";
    }
  }
  messageDisplay.textContent = "Guess the Color!"
});

hardButton.addEventListener("click", function(){
  numberOfSquares = 16;
  easyButton.classList.remove("selected");
  mediumButton.classList.remove("selected");
  hardButton.classList.add("selected");
  for (var i = 0; i < numberOfSquares; i++) {
    squares[i].classList.remove("easyMode");
    squares[i].classList.remove("mediumMode");
    squares[i].classList.add("hardMode");
  }
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickRandomColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < numberOfSquares; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "inline-block";
  }
  messageDisplay.textContent = "Guess the Color!"
});
