// Check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//CLick on x to delete todooo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
   event.stopPropagation();
})

$("input[type='text'").keypress(function(event){
  if(event.which === 13){
    //Grab new todoo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to li
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
  }
})

$(".fa-pencil-alt").click(function(){
  $("input[type='text'").fadeToggle();
})
