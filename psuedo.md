# Outline/Notes

### Basic High-Level
1. Button clicked
2. Call Constructer (Architect)
    1. Create Password Object
    2. Call Prompter
    3. Call Builder
        * Validate password

 
### function constructer()
1. 

    
### function promptUser()
* How many chars?
    * Mandatory
* Upper letters?
    * Optional
* Lower letters?
    * Optional
* Numbers?
    * Optional
* Special chars?
    * Optional


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

                
