var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] ;
var specialcharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'];

function getPasswordCriteria() {
  var userWantsLengthOf = parseInt(prompt("How many characters do you want in your password?"))
   while(isNaN(userWantsLengthOf) || userWantsLengthOf < 8 || userWantsLengthOf > 126) {
    userWantsLengthOf=prompt ("Character length needs to be a number, and range between 8-126 digits. Please make sure you are using a numerical charater and the proper range amount");
   }
   
  var userChoseNumbers = confirm("Do you want numbers in your password?"); 
  var userChoseUppercase = confirm ("Do you want Uppercase Letters in your password?");
  var userChoseLowercase = confirm ("Do you want Lowercase Letters in your password?");
  var userChoseSpecialCharacters = confirm ("Do you want Special Characters in your password?");
  var options = {
    userChoseNumbers: userChoseNumbers,
    userChoseUppercase: userChoseUppercase, 
    userChoseLowercase: userChoseLowercase,
    userChoseSpecialCharacters: userChoseSpecialCharacters,
    userWantsLengthOf: userWantsLengthOf,
  };
  return options;
}
function createRandom(length) {
  var randomIndex = Math.floor(Math.random() * length);
  return randomIndex;
}

function generatePassword() {
    var userChose = getPasswordCriteria();
    var availableChars = [];
    var passwordArr = [];

    if(userChose.userChoseNumbers) {
      availableChars = availableChars.concat(numbers);
    }
    if(userChose.userChoseLowercase) {
      availableChars = availableChars.concat(lowercase);
    }
    if(userChose.userChoseUppercase) {
      availableChars = availableChars.concat(uppercase);
      if(userChose.userChoseSpecialCharacters) {
        availableChars = availableChars.concat(specialcharacters);
      }
    } 
  
    for(var i = 0; i < userChose.userWantsLengthOf; i++) {
      passwordArr.push(availableChars[createRandom(availableChars.length)])
    }


  return passwordArr.join("")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);