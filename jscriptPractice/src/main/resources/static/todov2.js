var allLIs = document.querySelectorAll("li");

for (var i = 0; i < allLIs.length; i++) {
  allLIs[i].addEventListener("mouseover", function(){
    this.style.color = "green";
  });
  allLIs[i].addEventListener("mouseout", function(){
    this.style.color = "black";
  });
};