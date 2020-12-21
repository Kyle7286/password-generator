// Assigning element's object information to a variable for later use
let btnGenerate = document.getElementById("generate");
let txtBox = document.getElementById("password");


// On button click, run generatePassword() fuction;
btnGenerate.addEventListener("click", generatePassword);

// Master function; triggered by button click
function generatePassword() {
  console.log("[Event]Generate Password button pressed");
  console.log("[Event]Running generatePassword()");
  // Assign final password to variable;
  let finalPassword = constructPassword();


}

// Init Password object
var passwordObject = {
  chars: 0,
  numbers: 0,
  lower: 0,
  upper: 0,
  special: 0,
  typeSelected: 0,
  arrayLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  arrayNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  arraySpecials: ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", "\,", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
}



// password construct function which captures user input and modifies the passwordObject properties for later use;
function constructPassword() {
  console.log("[Event]Running constructPassword()");
  //  Character prompt - Loop the prompt until expected input is received, then proceed with function
  var promptChar;
  while (true) {
    console.log("[Prompt]Char: User Prompted");
    var promptChar = prompt("How many characters long?\n(Min 8, Max 128)");
    console.log("[Prompt]Char: User input=" + promptChar);
    // If user input is blank or empty, reloop again until proper input
    if (promptChar == "") {
      console.log("[Prompt]Char: User entered no input; relooping");
      continue;
    }
    // If user input is a number (true) & between 8-128
    else if (Number.isInteger(parseInt(promptChar)) && promptChar >= 8 && promptChar <= 128) {
      passwordObject.chars = promptChar //Update the password property with input
      console.log("[Prompt]Char: User Input accepted; proceeding");
      break; //proceed onward
    }
    // If canceled out; exit function b/c this is mandatory
    else if (!promptChar) {
      console.log("[Prompt]Char: User canceled");
      alert("Alert!\n\nCharacter length is required!\nTo continue with the password generator process, please start over and enter a value.")
      return 0; // exit parent function
    }
    else {
      console.log("[Prompt]Char: User input did not meet requested parameters");
      continue;
    }
  } // Character prompt
  console.log("[Object]password.chars:" + passwordObject.chars);
  console.log("[Prompt]Char: Loop complete!");
  console.log("-----------------------");


  //  Numbers prompt - Loop the prompt until expected input is received, then proceed with function
  var promptNum;
  while (true) {
    console.log("[Prompt]Num: User Prompted");
    var promptChar = prompt("How many characters long?\n(Min 8, Max 128)");
    console.log("[Prompt]Num: User input=" + promptChar);
    // If user input is blank or empty, reloop again until proper input
    if (promptChar == "") {
      console.log("[Prompt]Num: User entered no input; relooping");
      continue;
    }
    // If user input is a number (true) & between 8-128
    else if (Number.isInteger(parseInt(promptChar)) && promptChar >= 8 && promptChar <= 128) {
      passwordObject.chars = promptChar //Update the password property with input
      console.log("[Prompt]Num: User Input accepted; proceeding");
      break; //proceed onward
    }
    // If canceled out; exit function b/c this is mandatory
    else if (!promptChar) {
      console.log("[Prompt]Num: User canceled");
      alert("Alert!\n\nCharacter length is required!\nTo continue with the password generator process, please start over and enter a value.")
      return 0; // exit parent function
    }
    else {
      console.log("[Prompt]Num: User input did not meet requested parameters");
      continue;
    }
  } // Character prompt
  console.log("[Object]password.chars:" + passwordObject.chars);
  console.log("[Prompt]Num: Loop complete!");
  console.log("-----------------------");



}







