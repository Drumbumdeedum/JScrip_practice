$('.fadeOut').on("click", function(){
  $('div').fadeOut(1000, function(){
    console.log("Faded out!");
  });
});

$('.fadeIn').on("click", function(){
  $('div').fadeIn(1000, function(){
    console.log("Faded in!");
  });
});

$('.slideUp').on("click", function(){
  $('div').slideUp(1000, function(){
    console.log("Slided up!");
  });
});

$('.slideDown').on("click", function(){
  $('div').slideDown(1000, function(){
    console.log("Slided down!");
  });
});