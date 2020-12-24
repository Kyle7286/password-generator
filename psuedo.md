# Outline/Notes

### **Basic High-Level**
1. Button clicked
2. Call Constructer (Architect)
    1. Create Password Object
    2. Call Prompter
        * Validate at least 1 selections was made
    3. Call Builder
        * Validate password
            * Call Builder again failed validation

### **function constructer()**
1. Run promptUser()
2. Run buildPassword()
3. Modify text box text with password

    
### **function promptUser()**
* How many chars?
    * Mandatory
    * Prompt
    * Alert (Cancel)
    * Alert (Empty)
* Upper letters?
    * Optional
    * Confirm()
* Lower letters?
    * Optional
    * Confirm()
* Numbers?
    * Optional
    * Confirm()
* Special chars?
    * Optional
    * Confirm()
* No selections
    * Alert
    * Loop again
* Store all TRUE values only using array filter

### **function buildPassword()**
* Loop thru total characters input
    * Select random type
        * Add type selected to a string for validation later; only add it if it doesnt already exist in the string
        * Pull random character for the type selected via if statements
            * getLower(), getUpper(), getNumber(), getSpecial()
        * Append each character pull to a global string value
        * Call validator()

### **function typeValidator()***
* Loop for total char types
    * Grab the char type string
    * check to see if char type string exists in the types used string
    * If so, return final string
    * If not, run buildPassword() again