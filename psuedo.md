# Outline/Notes

### **Basic High-Level**
1. Button clicked
2. Call Constructer (Architect)
    1. Create Password Object
    2. Call Prompter
        * Validate at least 1 selections was made
    3. Call Builder
        * Validate password

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
    * What to do?

### **function buildPassword()**
* Loop thru total characters input
* 



### **passwordObject**




---

function constructPassword - Takes variables from capture and runs logic to create the password
    totalchars (for loop)
        charactertype (random 3)
            numbers (random 0-9)
            letters (random a-z)
                upper (random 0/1)
                lower (random 0/1)
            special (random 32)


CHARACTER INPUT (MANDATORY)
    While (True) {
        chars = parseINt(prompt())
        if (isInteger(chars) && chars >= 8 && chars <= 128) {
            set object.chars = chars
            break; //proceed onward
        }
        else if (!chars) {
            return;
        }

    }

## String Building
1. Loop for Char times


## Validator
    1. 


                


================================
- 

                
