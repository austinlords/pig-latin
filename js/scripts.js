//back-end logic
var nonLetter = /[^A-Za-z]/;
var vowel = /[aeiou]/i;
var consonant = /[bcdfghjklmnpqrstvwxyz]/i;
var q = /[qQ]/;

var translate = function(input) {
  if (vowel.test(input[0])) {
    input = input + "way";
    return input;
  } else if (consonant.test(input[0])) {
    var inputArray = input.split("");
    var removedCharacters = "";
    while (consonant.test(inputArray[0])) {
      removedCharacters += inputArray.shift();
      if ((q.test(removedCharacters)) && (inputArray[0] === "u")) {
        removedCharacters += inputArray.shift();
        newString = inputArray.join("") + removedCharacters + "ay";
        return newString;
      }
    }
    newString = inputArray.join("") + removedCharacters + "ay";
    return newString;
  } else {
    return false;
  }
}

// front-end (user interface) logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var pigLatin = translate(userInput);
    alert(pigLatin);
  }); // end of submit function
}); //end of front end
