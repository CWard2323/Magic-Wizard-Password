// Assignment code here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 
var specialChar = ['!', '@', '#', '$', '%', '&', '*'] 
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
console.log('Hey you clicked the button')
window.prompt("Choose password length. Atleast 8 characters but no more than 128");
window.prompt("Should password include Upper Case Letters? YES or NO");
window.prompt("Should password include Lower Case Letters? YES or NO");
window.prompt("Should password include Numbers? YES or NO"); 
window.prompt("Should password include Special Characters? YES or NO");

return "Generated password will go here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




