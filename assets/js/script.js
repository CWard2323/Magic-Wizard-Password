// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

window.prompt("Choose password length. Atleast 8 characters but no more than 128");
window.prompt("Should password include Upper Case Letters? YES or NO");
window.prompt("Should password include Lower Case Letters? YES or NO");
window.prompt("Should password include Numbers? YES or NO"); 
window.prompt("Should password include Special Characters");


