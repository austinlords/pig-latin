//back-end logic
var nonLetter = /[^A-Za-z]/;
var vowel = /[aeiou]/i;
var consonant = /[bcdfghjklmnpqrstvwxyz]/i;

var translate = function(input) {
  if (vowel.test(input[0])) {
    input = input + "way";
    return input;
  } else if (consonant.test(input[0])) {
    var inputArray = input.split("");
    alert(inputArray);
    removedCharacter = inputArray.shift();
    alert(removedCharacter);
    newString = inputArray.join("") + removedCharacter + "ay";
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
