// Assignment code here

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChar = ['!', '@', '#', '$', '%', '&', '*'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var passwordLength = 8;
var passwordPool = [];
specialChar[2]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);// Write password to the #password input


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}





function generatePassword() {

    passwordLength = parseInt(window.prompt("Choose password length. Atleast 8 characters but no more than 128"));
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        window.alert('Please choose something between 8 and 128')
        return null
    }

    var promptUpper = window.confirm("Should password include Upper Case Letters? Click Ok");

    var promptLower = window.confirm("Should password include Lower Case Letters? Click Ok");

    var promptNum = window.confirm("Should password include Numbers? Click Ok");

    var promptSpecial = window.confirm("Should password include Special Characters? Click Ok");

    if (promptUpper) {
        passwordPool = passwordPool.concat(upperCase)
    }
    if (promptLower) {
        passwordPool = passwordPool.concat(lowerCase)
    }
    if (promptNum) {
        passwordPool = passwordPool.concat(numbers)
    }
    if (promptSpecial) {
        passwordPool = passwordPool.concat(specialChar)
    }
    console.log(passwordPool)
    var  newPass = []
    //Generate password
    for (var i = 0; i < passwordLength; i++) {
        newPass.push(passwordPool[Math.floor(Math.random() * passwordPool.length)])
        console.log(newPass)
    }
    console.log(newPass)
    newPass = newPass.join('')
    console.log(newPass)
    return newPass
}










