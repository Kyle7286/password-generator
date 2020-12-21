Button clicked
    calls password function
        function captureResponse - Only assigns prompts to a variable
            How many chars?

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
                
                
