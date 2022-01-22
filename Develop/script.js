// Special str
character = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "_",
  "|",
  "~",
];

// Numeric str
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical str
alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// converts letters to uppercase
var toUpper = function (letters) {
  return letters.toUpperCase();
};

// creates a variable for uppercase letters
alpha2 = alpha.map(toUpper);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //getting the legnth of the password
  var length = getlength();

  //getting character array
  var chars = getCharacterTypes();

  var password = generatePassword(length, chars);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate Password Function 
function generatePassword(pwLength,charArray){

}

// Get Length of Password
function getlength(){
  var length;

//Asks for user input and convert input value from string to integer
length = parseInt(
  prompt("Please enter your name", "Harry Potter") 
 );

//Validate user input
if (!length) {
alert("Must choose a Password between 8 to 128 character");
length = getlength();
}
else if(length < 8 || length > 128) {
  alert("Must choose a Password between 8 to 128 character");
  length = getlength();

}

  return length;
}

// Get Types of Characters
function getCharacterTypes(){
  var chars;
  var numbers;
  var specialChars;
  var upperCase;
  var lowerCase;

  //Getting the user input for character used in password
  numbers = confirm("Does your password include numbers?");
  specialChars = confirm("Does your password include special characters?");
  upperCase = confirm("Does your password include upper case characters?");
  lowerCase = confirm("Does your password include lower case characters?");


// No options selected
if(!numbers && )
  
  return chars;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);