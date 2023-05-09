// Assignment Code
var generateBtn = document.querySelector("#generate");


//prompt function 
function generatePassword(){
  // chosen length of password
  var passwordLength;
  // an empty string for the password to be generated
  var password = "";
  var low = "abcdefghijklmnopqrstuvwxyz";
  var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numb = "1234567890";
  var special = "!@#$%^&*()";
  // a temporary hold of chosen characters
  var passwordSelector;

  // Prompt for the length of password. (Between 8-128)
  while (true) {
    passwordLength = prompt("How long should the password be (8-128 digits possible)?");
    if (passwordLength === null) {
      console.log("Entry was Null");
      return;
    } else if ((isNaN(passwordLength))) {
      console.log("NaN: Try again");
      alert("Please input a number");
    } else if (passwordLength < 8 || passwordLength > 128) {
      console.log("Incorrect Length: Try again")
      alert("Number must be between 8 and 128");
    } else {
      console.log("Correct Length Chosen: Length " + passwordLength);
      alert("You chose as password length of " + passwordLength );
      break;
    };
  }

  //length chosen now on to characters
  console.log("Now onto characters");
  alert("In your password, you may choose to have the following characters...");

  //confirm lowercase (answer is a temporary value that doesnt need to be constant)
  var answer = confirm("Would you like lowercase characters?");
  console.log(answer);
  if (answer) {
    passwordSelector = (passwordSelector + low);
    console.log("Adding Lowercase to password type");
    console.log(passwordSelector);
  }
  
  //confirm uppercase
  var answer = confirm("Would you like UPPERCASE characters?");
  console.log(answer);
  if (answer) {
    passwordSelector = (passwordSelector + up);
    console.log("Adding UPPER to password type");
    console.log(passwordSelector);
  }

  //confirm numbers
  var answer = confirm("Would you like number characters?");
  console.log(answer);
  if (answer) {
    passwordSelector = (passwordSelector + numb);
    console.log("Adding Numbers to password type");
    console.log(passwordSelector);
  }

  // confirm special chars
  var answer = confirm("Would you like special characters?");
  console.log(answer);
  if (answer) {
    passwordSelector = (passwordSelector + special);
    console.log("Adding Speceial to password type");
    console.log(passwordSelector);
  }

  // iterate through the length of the password
  for (var i = 0; i < passwordLength; i++) {
    // using math floor for the length of the selector, use math random to choose a random char within the string of length of the password selector.
    var char = passwordSelector[Math.floor(Math.random() * passwordSelector.length)];
    password += char
  }

  // log the password to confirm it worked
  console.log(password)

    //!prompt for character types

    //-lowercase
    //-upercase
    //-numeric
    //-special char

    //!Each prompt should be validated (with a response) and at least 1 char type selected

    //! When generated, the password is displayed in the password box

    //return the password tot he writePassword function so that var password in that function equals the password generated in this function
    return password;
  };


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
