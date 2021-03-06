// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() { 
  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "|", "}", "~"]
  var allChoices = false;
  var wantslowerCase = false;
  var wantsUpperCase = false;
  var wantsNumbers = false;
  var wantsSpecialCharacters = false;
  var done = false;
  var possibles = [];
  var results = [];

  while (!allChoices)
  {
    //First, find out how many characters they want. Don't let them leave until we have valid data to work with (a number between 8 and 128)
    while (!done) {
      var numCharacters = prompt("How many characters would you like your password to have?");

      if (isNaN(numCharacters) || numCharacters < 8 || numCharacters > 128)
        alert("Please input a number between 8 and 128.");
      else
        done = true;
    }

    // Now we want to ensure that we have at least one of these choices. Don't let the user leave until we do. (upper/lower/numbers/specials)
    wantslowerCase = confirm("Do you want to include lower case letters?");
    wantsUpperCase = confirm("Do you want to include upper case letters?");
    wantsNumbers = confirm("Do you want to include numbers?");
    wantsSpecialCharacters = confirm("Do you want to include special characters (such as #, !, %)?");
    
    if(wantslowerCase || wantsUpperCase || wantsNumbers || wantsSpecialCharacters)
      allChoices = true;
    else
      alert("Please be sure to select at least one of the choices.");
  }

  // Push all choices into another array
  if (wantslowerCase)
    possibles.push(lowerCaseLetters);

  if (wantsUpperCase)
    possibles.push(upperCaseLetters);

  if (wantsNumbers)
    possibles.push(numbers);

  if (wantsSpecialCharacters)
    possibles.push(specialCharacters);

  // This loop generates exactly how many characters they asked for above.
  for (var characters = 1; characters <= numCharacters; characters++)
  {
    //First, pull randomly from the possible initial choices (upper/lower/numbers/specials).
    var random =  possibles[Math.floor(Math.random() * possibles.length)];

    // Now pull randomly from the initial random choice generated above.
    var result = random[Math.floor(Math.random() * random.length)];

    //We now have our random character! Add it to our results array.
    results.push(result);
  }

  //Store the full array as a single password. Calling the join method will remove the "," character after each character in the array and combine them all into one.
  var password = results.join("");

  //We finally made it here! Return the final password to the function caller. 
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
