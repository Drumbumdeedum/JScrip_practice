var button = document.querySelector("button");
var body = document.querySelector("body")
var buffer = true;

/*
button.addEventListener("click", function() {
  if (buffer) {
    body.style.background = "white";
  } else {
    body.style.background = "blue";
  }
  buffer = !buffer;
})*/

button.addEventListener("click", function(){
  document.body.classList.toggle("purple");
});