//Back End Logic


var posOne = ["-","i","ii","iii","iv","v","vi","vii","viii","ix"];
var posTwo = ["-","x","xx","xxx","xl","l","lx","lxx","lxxx","xc"];
var posThree = ["-","c","cc","ccc","cd","d","dc","dcc","dccc","cm"];
var Posfour = ["-","m","mm", "mmm"];

var romanNum = function(input) {

var splitNum = input.split("");
if (splitNum.length === 1) {
   var fp = splitNum[0];
  var fpRoman = posOne[fp];
  alert(fpRoman);
  }
};



//Front End Logic
$(document).ready(function(){
$("#form").submit(function(event) {
  event.preventDefault();
    var input = $("#userInput").val();
    romanNum(input);
});
});
