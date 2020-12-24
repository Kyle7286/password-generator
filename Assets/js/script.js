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
  console.log(">>>>>>>>>>>>>>>>>>>>>>> ALL COMPLETE <<<<<<<<<<<<<<<<<<<<<<<<<<<<");
}

//Password object to hold values during construction
var passwordObject = {
  chars: 0,
  lower: 0,
  upper: 0,
  number: 0,
  special: 0,
  typeSelected: "",
  typeUsed: "",
  arraySpecials: ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", "\,", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
  arrayTypeSelections: [],
  string: "",
  rebuildCount: 0,
  // clears the cached dynamic data
  initPassword: function () {
    this.string = "";
    this.typeUsed = "";
    this.arrayTypeSelections = [];
    this.ntypeTotal = 0;
    this.rebuildCount = 0;
  }
}


//* MAIN FUNCTION: Calls the smaller functions to construct the password;
function constructPassword() {
  console.log("[Event]Running constructPassword()");

  // wipe object property values memory clean for creating a new password in case there are leftover data; should make a method
  passwordObject.initPassword();

  let i = promptUser();
  let j = buildPassword();
  console.log("CONSTRUCT PASSWORD RETURNING: " + j);
  return j
}

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
      alert("No input was received.  Please try again.")
      continue;
    }
    // If user input is a number (true) & between 8-128
    else if (Number.isInteger(parseInt(promptChar)) && promptChar >= 8 && promptChar <= 128) {
      passwordObject.chars = promptChar //Update the password property with input
      // console.log("[Prompt]Char: User Input accepted; proceeding");
      break; //proceed onward
    }
    // If canceled out; exit function b/c this is mandatory
    else if (!promptChar) {
      console.log("[Prompt]Char: User canceled");
      alert("Canceling as requested...\nTo continue with the password generator process, please start over and enter a value.")
      return -1; // exit parent function
    }
    else {
      console.log("[Prompt]Char: User input did not meet requested parameters");
      alert("Input did not meet the password limitations.  Please try again.")
      continue;
    }
  }

  // character prompts; stores true or false into variable
  while (true) {
    let lower = confirm("Would you like to include any lower case characters?");
    let upper = confirm("Would you like to include any upper case characters?");
    let number = confirm("Would you like to include any numbers?");
    let special = confirm("Would you like to include any special characters?");

    // total up the types selected; if still = 0, run prompts again
    let k = passwordObject.typeCount = (lower + upper + number + special);
    if (k === 0) {
      alert("No selections were made. Please try again and make at least 1 selection.")
      continue;
    }
    else {
      passwordObject.aTypes = [{ lower }, { upper }, { number }, { special }].filter(item => Object.values(item)[0]);
      break;
    }
  }
}

//Checkpoint
console.log(passwordObject);

//* go thru the password building process
function buildPassword() {
  console.log("[Event]Running buildPassword()");


  // random char type |  Object.array[of objects] > property > key
  let z = passwordObject.aTypes // Assign array of objects to z for easier use going forward
  
  // main loop; loop total chars long, for each character slot -> random type -> random char -> random case style
  for (let i = 0; i < passwordObject.chars; i++) {

    console.log("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
    let sType = Object.getOwnPropertyNames(passwordObject.aTypes[Math.floor((Math.random() * passwordObject.aTypes.length))])[0]
    console.log("Current type selected randomly: "+  sType  )
    if (passwordObject.typeUsed.indexOf(sType) === -1 ) { passwordObject.typeUsed += sType }
    console.log("Current types used so far: "+  passwordObject.typeUsed);
    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  
    let k = Object.getOwnPropertyNames(passwordObject.aTypes[Math.floor((Math.random() * z.length))])[0]; // grab a random property name from the array of objects
    // If the type does not exist in the typeused property; append the type to the property; later to be validated to ensure all types selected are used at least once
    if (passwordObject.typeUsed.indexOf(k) === -1) { passwordObject.typeUsed += k }

    // Run character logic and return a character; append to string
    if (k === "number") {
      passwordObject.string += getNumber();
    }
    else if (k === "special") {
      passwordObject.string += getSpecial();
    }
    else if (k === "upper") {
      passwordObject.string += getUpper();
    }
    else if (k === "lower") {
      passwordObject.string += getLower();
    }
    console.log("[charLoop]Character:#" + (i + 1) + " Type:" + k +
      "\tCurrent string: " + passwordObject.string);
  }

  // call type validator; if false, generate password again
  let y = typeValidator();
  console.log("VALIDATOR SAYS: " + y);

  // if all available types werent used then reset string; reset typeused; add 1 rebuild counter; buildPassword again
  if (y === -1) {
    passwordObject.string = "";
    passwordObject.typeUsed = "";
    passwordObject.rebuildCount++;
    return buildPassword();
  }
  // return the final string
  else {
    console.log(passwordObject);
    return passwordObject.string;
  }
}
// */

//#region ====================> all sub-functions <====================
// randomize thru arraySpec to get a special char
function getSpecial() {
  // console.log("[Event]Running getSpecial()");
  return passwordObject.arraySpecials[Math.floor((Math.random() * passwordObject.arraySpecials.length))];
}
// randomize number from char-chart
function getNumber() {
  // console.log("[Event]Running getNumber()");
  return String.fromCharCode(Math.floor((Math.random() * 10) + 48));
}
// randomize upper from char-chart
function getUpper() {
  // console.log("[Event]Running getUpper()");
  return String.fromCharCode(Math.floor((Math.random() * 26) + 65));
}
// randomize lower from char-chart
function getLower() {
  // console.log("[Event]Running getLower()");
  return String.fromCharCode(Math.floor((Math.random() * 26) + 97));
}

//validates if the password contains at least 1 of each type selected
function typeValidator() {
  console.log("[Event]Running typeValidator()");

  // loop thru types selected, check if they exist in types used, if not then recreate password until all are used
  for (let i = 0; i < passwordObject.arrayTypeSelections.length; i++) {
    let j = passwordObject.typeUsed.indexOf(passwordObject.arrayTypeSelections[i])

    if (passwordObject.typeUsed.indexOf(passwordObject.arrayTypeSelections[i]) === -1) {
      console.log("[Alert]typeValidator(): Alert! Not all types were used, regenerating password!");
      return -1;
    }
    // else return success
    else {
      console.log("[Alert]typeValidator(): Validation completed. All types used.");
      return 0;
    }
  }
}
//#endregion ================================================================================