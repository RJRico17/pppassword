document.getElementById("checkBtn").onclick = function() {
    let password = document.getElementById("userPass").value;

    // length
    if (password.length < 8) {
        output.innerHTML  = "";
        output.innerHTML += "Password Invalid<br>";
        output.innerHTML += "Password not long enough!<br>";
    }
    
    // special characters
    /*const passArray = password.split("");
    const specialCharArray = ["!","@","$","%","^","&","*"];
    for (let i = 0; i < password.length-1; i++) {
        for (let k = 0; k < specialCharArray.length; k++) {
            while (passArray[i] !== specialCharArray[k]) {
                output.innerHTML += "Password does not contain special character!<br>";
            }
        }
    }*/


    let special = ["!","@","$","%","^","&","*"];

    // for int s = 0
    // if password.charAt(0) == special[0]

    function  containsSpecialChars()
    {
        let passArray = (password.split(""));
        let match = 0;
        for (let char = 0; char < password.length; char++) // minus 1 needs to be there
        {
            for (let s = 0; s < special.length; s++) // s means symbol
            {
                if(password.charAt(char) !== special[s])
                {
                    match += 1;
                }
                else
                {
                    //output.innerHTML += "match: " + passArray[char] + "<br>";
                    return;
                }
            }
        }
        if (match > 0)
        {
            output.innerHTML += "Password does not contain special character!<br>";
            return;
        }    
    }
    containsSpecialChars();

    // spaces
    if (password.includes(" "))
    {
        output.innerHTML += "Password must not contain any spaces<br>"; // Prints each time
    }

    // lowercase
    if (password == password.toLowerCase()) // if its lowercase
    {
        output.innerHTML += "Password must contain an uppercase<br>";
    }

    // uppercase
    if (password == password.toUpperCase()) // if its uppercase
    {
        output.innerHTML += "Password must contain a lowercase<br>";
    }

    // has a digit
    /*function hasDigit(pass)
    {
        return pass != isNaN;
    }*/
}

let output = document.getElementById('output');