var secretNUmber = 4;
var guessed = false;

while(guessed === false) {
var guess = prompt("Guess the number!");
  if (Number(guess) === secretNUmber) {
    alert("YOU GUESSED IT!");
    guessed = true;
  }
  else if (Number(guess) > secretNUmber) {
    alert("Too high. Guess again!");
  }
  else {
    alert("Too low. Guess again!");
  }
}