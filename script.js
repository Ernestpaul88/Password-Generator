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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Generate Password Function 
function generatePassword(pwLength,charArray){
  var pass = "";

  for (i = 1; i <= pwLength; i++) {
    var random = Math.floor(Math.random() * charArray.length);
    // console.log(random, charArray[random]);
    pass += charArray[random];
  }

  // console.log(charArray);
  return pass;
}

// Get Length of Password
function getlength(){
  var length;

//Asks for user input and convert input value from string to integer
length = parseInt(
  prompt("How many characters would you like your password to be? Password length should be between 8 to 128 characters.") 
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
if(!numbers && !specialChars && !upperCase && !lowerCase){
  alert("You must choose a criteria!");
  chars = getCharacterTypes();
// User selects all options
} else if (
  specialChars &&
  numbers &&
  upperCase &&
  lowerCase
) {
  chars = character.concat(number, alpha, alpha2);
}   // user selects three options
else if (specialChars && numbers && upperCase) {
  chars = character.concat(number, alpha2);
} else if (specialChars && numbers && lowerCase) {
  chars = character.concat(number, alpha);
} else if (specialChars && lowerCase && upperCase) {
  chars = character.concat(alpha, alpha2);
} else if (numbers && lowerCase && upperCase) {
  chars = number.concat(alpha, alpha2);
}  // User selects only one option
else if (specialChars) {
  chars = character;
} else if (numbers) {
  chars = number;
} else if (lowerCase) {
  chars = alpha;
} else if (upperCase) {
  chars = alpha2;
}
  
  return chars;
}


