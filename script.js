// Assignment Code
var generateBtn = document.querySelector('#generate');

// Declare the variables for prompts
var wantNumeric;
var wantSpecialCharacter;
var wantLowerCase;
var wantUpperCase;

// Declare arrays of alphabets, numbers, and special characters
var numBer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '|', '<', '>', '/', '?'];
var alphaBetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaBetUpper = [...alphaBetLower]; // Copy alphaBetLower by using "Spread Operator"
for (var i=0; i<alphaBetLower.length; i++) {
  alphaBetUpper[i] = alphaBetUpper[i].toUpperCase(); // Generates uppercase of the alphabets
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Function for generating password
function generatePassword() {
  
  var notValidInput = true;
  var lengthOfPassword;
  var generatedPassword = [];

  // Prompts for the length of the password until the user inputs the number between 8 and 128
  while (notValidInput) {
    lengthOfPassword = prompt("How many characters do you need for your character?\nEnter between 8 and 128");
    notValidInput = (lengthOfPassword < 8 ) || (lengthOfPassword > 128);
  }

  // Take inputs from a user to confirm the character types for the desired password
  wantNumeric = confirm("Do you want to include a number?");
  wantSpecialCharacter = confirm("Do you want to include a special character?");
  wantLowerCase = confirm("Do you want to include a lower case alphabet?");
  wantUpperCase = confirm("Do you want to include a upper case alphabet?");

  // call getConfirm function
  var passwordOptions = getConfirm(wantNumeric, wantSpecialCharacter, wantLowerCase, wantUpperCase);

  // Run "for-loop" for the length of the password that is going to be generated, 
  // and pick random element from the "passwordOptions", and put it back to "generatedPassword" to stack an element of a password.
  for (var i=0; i<lengthOfPassword; i++) {
    var randomNum = Math.floor(Math.random() * passwordOptions.length);
    generatedPassword.push(passwordOptions[randomNum]);
  }
  // Once the password is successfully generated, alert the user that the password is generated!
  alert("Successfully generated a strong password!");

  // .join does removing double quotes from an each element of the array, and make it as a single string
  return generatedPassword.join(""); 
}

// Function for getting confirmation from the user
function getConfirm(wantNumeric, wantSpecialCharacter, wantLowerCase, wantUpperCase) {
  var passwordOptions = [];

  if (!wantNumeric && !wantSpecialCharacter && !wantLowerCase && !wantUpperCase) {
    passwordOptions = alert("You have to confirm at least one of the options\nto get safer password, please!!!\nClick [GENERATE PASSWORD] Button Again!!!");
  }
  // all wantNumeric & wantSpecialCharacter & wantLowerCase & wantUpperCase has been confirmed
  else if (wantNumeric && wantSpecialCharacter && wantLowerCase && wantUpperCase) {
    passwordOptions = numBer.concat(specialCharacter, alphaBetLower, alphaBetUpper);
  }
  // wantNumeric & wantSpecialCharacter & wantLowerCase has been confirmed
  else if (wantNumeric && wantSpecialCharacter && wantLowerCase) {
    passwordOptions = numBer.concat(specialCharacter, alphaBetLower);
  }
  // wantNumeric & wantSpecialCharacter & wantUpperCase has been confirmed
  else if (wantNumeric && wantSpecialCharacter && wantUpperCase) {
    passwordOptions = numBer.concat(specialCharacter, alphaBetUpper);
  }
  // wantNumeric & wantLowerCase & wantUpperCase has been confirmed
  else if (wantNumeric && wantLowerCase && wantUpperCase) {
    passwordOptions = numBer.concat(alphaBetLower, alphaBetUpper);
  }
  // wantSpecialCharacter & wantLowerCase & wantUpperCase has been confirmed
  else if (wantSpecialCharacter && wantLowerCase && wantUpperCase) {
    passwordOptions = specialCharacter.concat(alphaBetLower, alphaBetUpper);
  }  
  // wantNumeric & wantSpecialCharacter has been confirmed
  else if (wantNumeric && wantSpecialCharacter) {         
    passwordOptions = numBer.concat(specialCharacter);
  }
  // wantNumeric & wantLowerCase has been confirmed
  else if (wantNumeric && wantLowerCase) {
    passwordOptions = numBer.concat(alphaBetLower);
  }
  // wantNumeric & wantUpperCase has been confirmed
  else if (wantNumeric && wantUpperCase) {
    passwordOptions = numBer.concat(alphaBetUpper);
  }
  // wantSpecialCharacter & wantLowerCase has been confirmed
  else if (wantSpecialCharacter && wantLowerCase) {
    passwordOptions = specialCharacter.concat(alphaBetLower);
  }
  // wantSpecialCharacter & wantUpperCase has been confirmed
  else if (wantSpecialCharacter && wantUpperCase) {
    passwordOptions = specialCharacter.concat(alphaBetUpper);
  }
  // wantLowerCase & wantUpperCase has been confirmed
  else if (wantLowerCase && wantUpperCase) {
    passwordOptions = alphaBetLower.concat(alphaBetUpper);
  }  
  // only wantNumeric has been confirmed
  else if (wantNumeric) {                                                    
    passwordOptions = numBer;
  }
  // only wantSpecialCharacter has been confirmed
  else if (wantSpecialCharacter) {                                           
    passwordOptions = specialCharacter;
  }
  // only wantLowerCase has been confirmed
  else if (wantLowerCase) {                                                  
    passwordOptions = alphaBetLower;
  }
  // only wantUpperCase has been confirmed
  else if (wantUpperCase) {                                                  
    passwordOptions = alphaBetUpper;
  }

  return passwordOptions;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
