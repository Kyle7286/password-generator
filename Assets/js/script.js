// Assigning element's object information to a variable for later use
let btnGenerate = document.getElementById("generate");
let txtBox = document.getElementById("password");

// On button click, run generatePassword() fuction;
btnGenerate.addEventListener("click", generatePassword);

// Master function; triggered by button click; keep it simple here
function generatePassword() {
  console.log("[Event]Generate Password button pressed");
  console.log("[Event]Running generatePassword()");

  // Assign final password to variable;
  let finalPassword = constructPassword();
  txtBox.innerHTML = finalPassword;
}

// Init Password object
var passwordObject = {
  chars: 0,
  number: 0,
  lower: 0,
  upper: 0,
  special: 0,
  typeSelected: 0,
  typeUsed: "",
  arraySpecials: ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", "\,", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
  arrayTypeSelections: [],
  string: "",
}



//* MAIN FUNCTION: Calls the smaller functions to construct the password;
function constructPassword() {
  console.log("[Event]Running constructPassword()");

  

  // // wipe object property values memory clean for creating a new password
  // passwordObject.arrayTypeSelections = [];
  // passwordObject.typeUsed = "";
  // passwordObject.string = "";

  promptUser();
  return buildPassword();

}
// */

//* SUB FUNCTIONS: contains all the prompt logic and modifies the password object with the results
function promptUser() {
  
  //START:  Character prompt - Loop the prompt until expected input is received, then proceed with function
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
      return -1; // exit parent function
    }
    else {
      console.log("[Prompt]Char: User input did not meet requested parameters");
      continue;
    }
  } //END: Character prompt

  console.log("[Object]password.chars:" + passwordObject.chars);
  console.log("[Prompt]Char: Loop complete!");
  console.log("Current selections:\nChars:" + passwordObject.chars + "\nLower:N/A\nUpper:N/A\nNumbers:N/A\nSpecials:N/A\narrayTypeSelections: " + passwordObject.arrayTypeSelections.join(","));
  console.log("-----------------------");


  //START: lower prompt - Loop the prompt until expected input is received, then proceed with function
  var promptLow;
  while (!promptLow) {
    console.log("[Confirm]Low: User Prompted");
    var promptLow = confirm("Would you like to include any lower case characters?");
    console.log("[Confirm]Low: User input=" + promptLow);
    // If user input is true
    if (promptLow) {
      passwordObject.lower = 1; //Update the password.lower with input
      passwordObject.typeSelected = 1;
      passwordObject.arrayTypeSelections.push("lower"); // Add type to selections array for later type randomization
      console.log("[Object]password.lower:" + passwordObject.lower);
      console.log("[Object]password.typeSelected:" + passwordObject.typeSelected);



      break; //proceed onward
    }
    // If canceled, record data and proceed with function
    else {
      console.log("[Confirm]Low: User canceled");
      passwordObject.lower = 0
      console.log("[Object]password.lower:" + passwordObject.lower);
      break; // proceed with function
    }
  } //END: lower prompt

  console.log("[Confirm]Low: Loop complete!");
  console.log("-----------------------");
  console.log("Current selections:\nChars:" + passwordObject.chars + "\nLower:" + passwordObject.lower + "\nUpper:N/A\nNumbers:N/A\nSpecials:N/A\narrayTypeSelections: " + passwordObject.arrayTypeSelections.join(","));
  console.log("-----------------------");


  //START: upper prompt - Loop the prompt until expected input is received, then proceed with function
  var promptUp;
  while (!promptUp) {
    console.log("[Confirm]Up: User Prompted");
    var promptUp = confirm("Would you like to include any upper case characters?");
    console.log("[Confirm]Up: User input=" + promptUp);
    // If user input is true
    if (promptUp) {
      passwordObject.upper = 1; //Update the password.upper with input
      passwordObject.typeSelected = 1;
      passwordObject.arrayTypeSelections.push("upper"); // Add type to selections array for later type randomization
      console.log("[Object]password.upper:" + passwordObject.upper);
      console.log("[Object]password.typeSelected:" + passwordObject.typeSelected);
      break; //proceed onward
    }
    // If canceled, record data and proceed with function
    else {
      console.log("[Confirm]Up: User canceled");
      passwordObject.upper = 0
      console.log("[Object]password.upper:" + passwordObject.upper);
      break; // proceed with function
    }
  } //END: upper prompt

  console.log("[Confirm]Up: Loop complete!");
  console.log("-----------------------");
  console.log("Current selections:\nChars:" + passwordObject.chars + "\nLower:" + passwordObject.lower + "\nUpper:" + passwordObject.lower + "\nNumbers:N/A\nSpecials:N/A\narrayTypeSelections: " + passwordObject.arrayTypeSelections.join(","));
  console.log("-----------------------");




  //START: Numbers prompt - Loop the prompt until expected input is received, then proceed with function
  var promptNum;
  while (!promptNum) {
    console.log("[Confirm]Num: User Prompted");
    var promptNum = confirm("Would you like to include any numbers?");
    console.log("[Confirm]Num: User input=" + promptNum);
    // If user input is true
    if (promptNum) {
      passwordObject.numbers = 1; //Update the password.numbers with input
      passwordObject.typeSelected = 1;
      passwordObject.arrayTypeSelections.push("number") // Add type to selections array for later type randomization
      console.log("[Object]password.numbers:" + passwordObject.numbers);
      console.log("[Object]password.typeSelected:" + passwordObject.typeSelected);

      break; //proceed onward
    }
    // If canceled, record data and proceed with function
    else {
      console.log("[Confirm]Num: User canceled");
      passwordObject.numbers = 0
      break; // proceed with function
    }
  } //END: Numbers prompt

  console.log("[Confirm]Num: Loop complete!");
  console.log("-----------------------");
  console.log("Current selections:\nChars:" + passwordObject.chars + "\nLower:" + passwordObject.lower + "\nUpper:" + passwordObject.upper + "\nNumbers:" + passwordObject.numbers + "\nSpecials:N/A\narrayTypeSelections: " + passwordObject.arrayTypeSelections.join(","));
  console.log("-----------------------");


  //START: Special prompt - Loop the prompt until expected input is received, then proceed with function
  var promptSpec;
  while (!promptSpec) {
    console.log("[Confirm]Spec: User Prompted");
    var promptSpec = confirm("Would you like to include any special characters?");
    console.log("[Confirm]Spec: User input=" + promptSpec);
    // If user input is true
    if (promptSpec) {
      passwordObject.special = 1; //Update the password.special with input
      passwordObject.typeSelected = 1;
      passwordObject.arrayTypeSelections.push("special") // Add type to selections array for later type randomization
      console.log("[Object]password.special:" + passwordObject.special);
      console.log("[Object]password.typeSelected:" + passwordObject.typeSelected);
      break; //proceed onward
    }
    // If canceled, record data and proceed with function
    else {
      console.log("[Confirm]Spec: User canceled");
      passwordObject.special = 0
      break; // proceed with function
    }
  } //END: Special prompt

  console.log("[Confirm]Spec: Loop complete!");
  console.log("-----------------------");
  console.log("Current selections:\nChars:" + passwordObject.chars + "\nLower:" + passwordObject.lower + "\nUpper:" + passwordObject.upper + "\nNumbers:" + passwordObject.numbers + "\nSpecial:" + passwordObject.special + "\narrayTypeSelections: " + passwordObject.arrayTypeSelections.join(","));
  console.log("-----------------------");
  console.log("[Event]End constructPassword()");
  // passwordObject.typeSelected = 0 //Resetting this value for testing reasons due to entering the procedure anew each attempt; keep at the end;
}
// */

//* go thru the password building process
function buildPassword() {
  console.log("[Event]Running buildPassword()");

  // main loop; loop total chars long, for each character slot -> random type -> random char -> random case style
  for (let i = 0; i < passwordObject.chars; i++) {
    console.log("[charLoop]Character: #" + i);

    // random char type
    let k = passwordObject.arrayTypeSelections[Math.floor((Math.random() * passwordObject.arrayTypeSelections.length))];
    console.log("[charLoop]CharacterType:  " + k);
    if (passwordObject.typeUsed.indexOf(k) === -1) { passwordObject.typeUsed += k }
    console.log("[charLoop]Types Used: " + passwordObject.typeUsed);

    // Run character logic and return a character
    if (k === "number") {
      console.log("[IF] number statement");
      passwordObject.string += getNumber();
      // console.log("[Event]Got: " + character);
    };
    if (k === "special") {
      console.log("[IF] special statement");
      passwordObject.string += getSpecial();
      // console.log("[Event]Got: " + character);
    };
    if (k === "upper") {
      console.log("[IF] upper statement");
      passwordObject.string += getUpper();
      // console.log("[Event]Got: " + character);

    };
    if (k === "lower") {
      console.log("[IF] lower statement");
      passwordObject.string += getLower();
      // console.log("[Event]Got: " + character);
    };




    console.log("Current string: " + passwordObject.string);
  }
  //#region "get" sub-functions
  // randomize thru arraySpec to get a special char
  function getSpecial() {
    console.log("[Event]Running getSpecial()");
    return passwordObject.arraySpecials[Math.floor((Math.random() * passwordObject.arraySpecials.length))];
  }

  // randomize number from c char-chart
  function getNumber() {
    console.log("[Event]Running getNumber()");
    return String.fromCharCode(Math.floor((Math.random() * 10) + 48));
  }

  // randomize upper from char-chart
  function getUpper() {
    console.log("[Event]Running getUpper()");
    return String.fromCharCode(Math.floor((Math.random() * 26) + 65));
  }

  // randomize lower from char-chart
  function getLower() {
    console.log("[Event]Running getLower()");
    return String.fromCharCode(Math.floor((Math.random() * 26) + 97));
  }

  // randomize upper or lower from char-chart.  This is if user selected
  function getLetter() {
    let lType = Math.floor((Math.random() * 2) + 1);
    if (lType = 1) { return getUpper() }
    if (lType = 2) { return getLower() }
  }











  //#endregion

  // call type validator
  typeValidator();
  return passwordObject.string;
}
// */

//validates if the password contains at least 1 of each type selected
function typeValidator() {
  console.log("[Event]Running typeValidator()");
  // loop thru types selected, check if they exist in types used, if not then recreate password until all are used
  for (let i = 0; i < passwordObject.arrayTypeSelections.length; i++) {
    if (passwordObject.typeUsed.indexOf(passwordObject.arrayTypeSelections[i]) === -1) {
      console.log("[Alert]typeValidator(): Alert! Not all types were used, regenerating password!");
      buildPassword();
      return;
    }
  }

  // return success
  console.log("[Alert]typeValidator(): Validation completed. All types used.");
  return 0
}