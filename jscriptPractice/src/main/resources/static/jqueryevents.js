$("button").click(function(){
  alert("YOU CLICKED IT!!!");
  $(this).css("background", "pink");

});

$("input").keypress(function(event){
  if(event.which === 13){
    alert("YOU HIT ENTER!");
  }
});

$("h1").on("click", function(){
  $(this).css("color", "purple");
});

$(".onKeypress").on("keypress", function(){
  alert("Key pressed!");
});

$("button").on("mouseenter", function(){
  $(this).css("color", "purple");
});

$("button").on("mouseleave", function(){
  $(this).css("color", "black");
});