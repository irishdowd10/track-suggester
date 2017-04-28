$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

    // var arrayOfQuestions = ['#questionOne', '#questionTwo', '#questionThree',
    //                         '#questionFour', '#questionFive'];

    var nameInput = $("input#name").val();

    // var result = 0;

    // arrayOfQuestions.length = 5;

    // for(var x = 0; x < arrayOfQuestions.length; x++) {
    //   result += parseInt($(arrayOfQuestions[x]).val());
    // }
    var questionOne = parseInt($("#questionOne").val());
    var questionTwo = parseInt($("#questionTwo").val());
    var questionThree =  parseInt($("#questionThree").val());
    var questionFour = parseInt($("#questionFour").val());
    var questionFive =  parseInt($("#questionFive").val());
    result = questionOne + questionTwo + questionThree + questionFour + questionFive;


    if(!isNaN(result)) {
      if (result <= 5) {
        $(".option").hide();
        $("#css").show();
      } else if (result <= 6) {
        $(".option").hide();
        $("#ruby").show();
      } else if (result <= 8) {
        $(".option").hide();
        $("#c").show();
      }
    } else {
      window.alert('Please select all values!')
    }

    $(".name").text(nameInput);
  });
});
