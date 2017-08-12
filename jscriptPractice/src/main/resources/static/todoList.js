$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(200, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var text = $(this).val();
    $("ul").append("<li>"+text+"<span><i class='fa fa-trash'></i></span></li>");
    $(this).val('');
  }
});

$('.fa-plus').on("click", function(){
  $("input[type='text']").slideToggle(200);
});
