// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = []
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":","\"","\\"]

//for this function it is timsing the decimal we generate by the max number of the array and then rounding down so we always stay within the length of the array
function randomIndex(max) {
     var rand = Math.random()
     return Math.floor(rand*max)
}
function randomItem(list) {
  return list[randomIndex(list.length)]
}

//this will be the window promt to enter the length of your password
function generatePassword() {
  var passwordLength = window.prompt("Enter password length");
  var passwordNum = parseInt(passwordLength)

  //this is promting an alert if the password isn't within the specified range or is left empty
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength  > 128 || !passwordLength ){
    window.alert("please enter number between 8 and 128");
    return;
  }

  //these variables are the pop up windows to select what characters are needed for your password
  var adduppercase = window.confirm("would you like to add uppercase letters?")
  var addlowercase = window.confirm("would you like to add lowercase letters?")
  var addnumbers = window.confirm("would you like to add numbers?")
  var addsymbols = window.confirm("would you like to add symbols?")

  var options = []

  //this is pushing the spread of each array chosen into a seperate variable creating a new array
  for (var i = 0; i < lowercase.length; i++) {
    uppercase.push(lowercase[i].toUpperCase())
  }
  if (adduppercase) {
    options.push(...uppercase)
  }
  if (addlowercase) {
    options.push(...lowercase)
  }
  if (addnumbers) {
    options.push(...numbers)
  }
  if (addsymbols) {
    options.push(...symbols)
  }

  var generatedPassword = ""

  //here we are combining the random number generater with the options array to pull the random charactors for the password and make it a string
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = randomItem(options)
    generatedPassword += randomChar
  }

  //this will display the generated password string in the text box 
  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
