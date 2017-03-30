//Back End Logic






//Front End Logic
$(document).ready(function(){

  $("#userInput").submit(function(event) {
    var input = $("#userInput input").val();
    event.preventDefault();
    alert(input);
});
});
