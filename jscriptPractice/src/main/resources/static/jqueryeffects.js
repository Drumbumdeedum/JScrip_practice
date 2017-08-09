$('.fadeOut').on("click", function(){
  $('div').fadeOut(1000, function(){
    console.log("Faded out!");
  });
});

$('.fadeIn').on("click", function(){
  $('div').fadeIn(1000, function(){
    console.log("Faded out!");
  });
});