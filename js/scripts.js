$(document).ready(function() {
  $(".formOne").submit(function(event) {
  var nameInput = $("input#name").val();
  var questionOne = parseInt($("select#questionOne").val());
  var questionTwo = parseInt($("select#questionTwo").val());
  var questionThree =  parseInt($("select#questionThree").val());
  var questionFour = parseInt($("select#questionFour").val());
  var questionFive =  parseInt($("select#questionFive").val());
  var result = questionOne + questionTwo + questionThree + questionFour + questionFive;

  if (result<= 5) {
    $(".option").hide();
    $("#CSS").show();
    }
   else if (result<=7) {
     $(".option").hide();
      $("#Ruby").show();
    }
    else {
      $(".option").hide();
      $("#c").show();
    }

  $(".name").text(nameInput);
    event.preventDefault();
  });
