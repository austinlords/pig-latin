//back-end logic
var nonLetter = /[^A-Za-z]/;
var vowel = /[aeiou]/i;
var consonant = /[bcdfghjklmnpqrstvwxyz]/i;
var q = /[qQ]/;

var translate = function(input) {
  var pigLatinResult = "";
  var wordsArray = input.split(" ");
  wordsArray.forEach(function(word) {
    if (vowel.test(word[0])) {
      word += "way";
      pigLatinResult += word + " ";
    } else if (consonant.test(word[0])) {
      var consonantWordArray = word.split("");
      var removedCharacters = "";
      while (consonant.test(consonantWordArray[0])) {
        removedCharacters += consonantWordArray.shift();
        if ((q.test(removedCharacters)) && (consonantWordArray[0] === "u")) {
          removedCharacters += consonantWordArray.shift();
          newString = consonantWordArray.join("") + removedCharacters + "ay";
        }
      }
      newString = consonantWordArray.join("") + removedCharacters + "ay";
      pigLatinResult += newString + " ";
    } else {
      return false;
    }
  });
  return pigLatinResult;
}

// front-end (user interface) logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var pigLatin = translate(userInput);
    $("#pigLatin").text(pigLatin);
    $("#result").show();
  }); // end of submit function
}); //end of front end
