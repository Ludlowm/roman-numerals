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
  else if (splitNum.length === 2) {
    var fp = splitNum[0];
    var fpRoman = posOne[fp];
    var sp = splitNum[1];
    var spRoman = posTwo[sp];
    alert(spRoman + fpRoman);
    }
  else if (splitNum.length === 3) {
    var fp = splitNum[0];
    var fpRoman = posOne[fp];
    var sp = splitNum[1];
    var spRoman = posTwo[sp];
    var tp = splitNum[2];
    var tpRoman = posthree[tp];
    alert(tpRoman + spRoman + fpRoman);
    }
  else if (splitNum.length === 4) {
    var fp = splitNum[0];
    var fpRoman = posOne[fp];
    var sp = splitNum[1];
    var spRoman = posTwo[sp];
    var tp = splitNum[2];
    var tpRoman = posthree[tp];
    var lp = splitNum[3];
    var lpRoman = posFour[lp];
    alert(lpRoman + tpRoman + spRoman + fpRoman);
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
