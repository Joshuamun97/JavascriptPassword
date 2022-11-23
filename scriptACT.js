// To create variables for password
var numbers = [];
var lowercase = [];
var uppercase = [] ;
var specialcharacters = [];

//two functions are created here to keep the actual function and the criteria seperated.

//this function is to create the password criteria
function getPasswordCriteria() {
  var userChoseNumbers = confirm ("Do you want numbers in your password?");
  //created var options for return
  var options = {
    userChoseNumbers: userChoseNumbers
  };

  return options
}

function createRandom(length) {
 var randomNum Math.floor(math.random() availableChars.length);
return options;
}
//this function is to generate the actual criteria
function generatePassword() {
  var userChose= getPasswordCriteria();
  var availableChars [];
  console.log(userChose)
  //if/else statements to clarify true or false from password criteria. ex if user chose yes to numbers, boolean would read as true and will select from numbers array
  if(userChose.userChoseNumbers) {
    availableChars.concat(numbers);
    console.log(availableChars);
  }

  for (var I= 0; i < 4; i++);

}




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
