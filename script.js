document.getElementById("checkBtn").onclick = function() {
    let password = document.getElementById("userPass").value;
    output.innerHTML = "";

    let validChecks = 0;

    // length
    if (password.length < 8) {
        output.innerHTML += "Password is invalid:<br>";
        output.innerHTML += "Password must be at least 8 characters long.<br>";
    }
    
    // special characters
    let special = ["!","@","$","%","^","&","*"];

    function  containsSpecialChars()
    {
        let passArray = (password.split(""));
        let match = 0;
        for (let char = 0; char < password.length; char++)
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
            output.innerHTML += "Password must include at least one special character (!, @, #, etc.).<br>";
            return;
        }    
    }
    containsSpecialChars();

    // spaces
    if (password.includes(" "))
    {
        output.innerHTML += "Password must not contain any spaces.<br>";
    }

    // lowercase
    if (password == password.toLowerCase()) // if its lowercase
    {
        output.innerHTML += "Password must include at least one uppercase letter.<br>";
    }

    // uppercase
    if (password == password.toUpperCase()) // if its uppercase
    {
        output.innerHTML += "Password must include at least one lowercase letter.<br>";
    }

    // digit
    let nums = ["0","1","2","3","4","5","6", "7", "8", "9"];

    function  containsDigit()
    {
        let passArray = (password.split(""));
        let match = 0;
        for (let char = 0; char < password.length; char++)
        {
            for (let s = 0; s < nums.length; s++) // s means symbol
            {
                if(password.charAt(char) !== nums[s])
                {
                    match += 1;
                }
                else
                {
                    return;
                }
            }
        }
        if (match > 0)
        {
            output.innerHTML += "Password must include at least one numeric digit.<br>";
            return;
        }    
    }
    containsDigit();
}

let output = document.getElementById('output');