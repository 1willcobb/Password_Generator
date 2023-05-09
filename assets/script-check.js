// Assignment Code
var generateBtn2 = document.querySelector("#generate2");


//prompt function 
function generatePassword2(){
  // chosen length of password
  var passwordLength = document.getElementById("length-selector").value;
  // an empty string for the password to be generated
  var password2 = "";
  var low = "abcdefghijklmnopqrstuvwxyz";
  var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numb = "1234567890";
  var special = "!@#$%^&*()";
  // a temporary hold of chosen characters
  var passwordSelector= "";

  if (!passwordLength) {
    console.log("no length selected");
    password2 = "No password length was selected";
    alert("No password length was selected");
    return password2;
  };

  //confirm lowercase (answer is a temporary value that doesnt need to be constant)
  const lowercase = document.getElementById("lowercase").checked;
  console.log("lowercase value = " + lowercase);
  if (lowercase) {
    passwordSelector = (passwordSelector + low);
    console.log("Adding Lowercase to password type");
    console.log(passwordSelector);
  }
  
  //confirm uppercase
  var uppercase = document.getElementById("uppercase").checked;
  console.log("uppercase value = " + uppercase);
  if (uppercase) {
    passwordSelector = (passwordSelector + up);
    console.log("Adding UPPER to password type");
    console.log(passwordSelector);
  }

  //confirm numbers
  var numbers = document.getElementById("numbers").checked;
  console.log("Number Value = " + numbers);
  if (numbers) {
    passwordSelector = (passwordSelector + numb);
    console.log("Adding Numbers to password type");
    console.log(passwordSelector);
  }

  // confirm special chars
  var special_char = document.getElementById("special-char").checked;
  console.log("special char value = " + special_char);
  if (special_char) {
    passwordSelector = (passwordSelector + special);
    console.log("Adding Speceial to password type");
    console.log(passwordSelector);
  }

  if (!special_char && !numbers && !uppercase && !lowercase) {
    console.log("no checkboxed selected");
    password2 = "No characters were selected";
    alert("No characters were selected");
    return password2;
  };

  // iterate through the length of the password
  for (var i = 0; i < passwordLength; i++) {
    // using math floor for the length of the selector, use math random to choose a random char within the string of length of the password selector.
    var char = passwordSelector[Math.floor(Math.random() * passwordSelector.length)];
    password2 += char
  }

  // log the password to confirm it worked
  console.log("password to display: " + password2);

    //return the password tot he writePassword function so that var password in that function equals the password generated in this function
    return password2;
  };


// Write password to the #password input
function writePassword2() {
  var password2 = generatePassword2();
  var passwordText = document.querySelector("#password2");

  passwordText.value = password2;

}

// Add event listener to generate button
generateBtn2.addEventListener("click", writePassword2);
