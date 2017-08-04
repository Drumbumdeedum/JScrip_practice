var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
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