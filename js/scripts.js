$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var questionOne = parseInt($("#questionOne").val());
    var questionTwo = parseInt($("#questionTwo").val());
    var questionThree =  parseInt($("#questionThree").val());
    var questionFour = parseInt($("#questionFour").val());
    var questionFive =  parseInt($("#questionFive").val());
    var result = questionOne + questionTwo + questionThree + questionFour + questionFive;


    if(!isNaN(result)) {
      if (result <= 4) {
        $(".option").hide();
        $("#css").show();
      } else if (result <= 5) {
        $(".option").hide();
        $("#c").show();
      } else if (result <= 8) {
        $(".option").hide();
        $("#java").show(); .
      }
    } else {
      alert('Please select all values!')
    }

    $(".name").text(nameInput);
  });
});
