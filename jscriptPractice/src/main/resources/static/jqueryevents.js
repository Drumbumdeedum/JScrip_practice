$("button").click(function(){
  alert("YOU CLICKED IT!!!");
});

$("button").click(function(){
  $(this).css("background", "pink");
});

$("input").keypress(function(event){
  if(event.which === 13){
    alert("YOU HIT ENTER!");
  }
});