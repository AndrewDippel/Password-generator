// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = []
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":","\"","\\"]

function generatePassword() {
  var passwordLength = window.prompt("Enter password length");
  console.log(passwordLength);

  var passwordNum = parseInt(passwordLength)

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength  > 128 || !passwordLength ){
    window.alert("please enter number between 8 and 128");
    return;
  }
  var adduppercase = window.confirm("would you like to add uppercase letters?")
  var addlowercase = window.confirm("would you like to add lowercase letters?")
  var addnumbers = window.confirm("would you like to add numbers?")
  var addsymbols = window.confirm("would you like to add symbols?")

  var options = []

  for (var i = 0; i <lowercase.length; i++) {
    uppercase[i] = lowercase[i].toUpperCase()
  }
  if (adduppercase) {
    options.push(uppercase)
  }
  if (addlowercase) {
    options.push(lowercase)
  }
  if (addnumbers) {
    options.push(numbers)
  }
  if (addsymbols) {
    options.push(symbols)
  }

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
