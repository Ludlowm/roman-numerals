//Back End Logic

var posOne = ["-","i","ii","iii","iv","v","vi","vii","viii","ix"];
var posTwo = ["-","x","xx","xxx","xl","l","lx","lxx","lxxx","xc"];
var posThree = ["-","c","cc","ccc","cd","d","dc","dcc","dccc","cm"];
var posFour = ["-","m","mm", "mmm"];

var romanNum = function(input) {
var wholestring = "";
var splitNum = input.split("");
if (splitNum.length === 1) {
 var fp = splitNum[0];
 var fpRoman = posOne[fp];
 wholeString = fpRoman;
  }

  else if (splitNum.length === 2) {
    var fp = splitNum[1];
    var fpRoman = posOne[fp];
    var sp = splitNum[0];
    var spRoman = posTwo[sp];
      wholeString = (spRoman + fpRoman);

    }

  else if (splitNum.length === 3) {
    var fp = splitNum[2];
    var fpRoman = posOne[fp];
    var sp = splitNum[1];
    var spRoman = posTwo[sp];
    var tp = splitNum[0];
    var tpRoman = posThree[tp];
    wholeString = tpRoman + spRoman + fpRoman;
    }

  else if (splitNum.length === 4) {
    var fp = splitNum[3];
    var fpRoman = posOne[fp];
    var sp = splitNum[2];
    var spRoman = posTwo[sp];
    var tp = splitNum[1];
    var tpRoman = posThree[tp];
    var lp = splitNum[0];
    var lpRoman = posFour[lp];
    wholeString = lpRoman + tpRoman + spRoman + fpRoman;
    }

    var pattern = /-/g;
    wholeString = wholeString.replace(pattern,"");
    //  alert(wholeString);
    return wholeString;
};


//Front End Logic
$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = $("#userInput").val();
    var result = romanNum(input);
    $("#output").text(result);
  });
});
