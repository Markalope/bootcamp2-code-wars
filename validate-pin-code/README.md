#Regex - Validate Pin Code
This is for Code 07-A: Since this assignment came late in the day, I worked alone on this one and 07-B - so there's no whiteboard photo - I worked these out in the console.

**The challenge**
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false

**the Process**
I knew the basic syntax of the Regex expression I needed to write, although it took several experiments to get both of the conditions (the length of the strings) working. I had several tries that would correctly flag all the false ones, but wouldn't select the correct PINs.

This took longer than I expected due to this, I probably spent an hour or so doing research and experimentation.