var h1 = document.querySelector("h1");
var isBlue = false;

setInterval(function () {
  if (isBlue) {
    h1.style.background = "white";
  } else {
    h1.style.background = "#3498db";
  }
  isBlue = !isBlue;
}, 1000);

h1.addEventListener("click", function(){
  alert("h1 was clicked!");
})

var p = document.querySelector("p");

p.addEventListener("click", function(){
  alert("paragraph clicked")
})