document.getElementById("checkBtn").onclick = function() {
    let password = document.getElementById("userPass").value;
    if (password.length < 8) {
        output.innerHTML  = "";
        output.innerHTML += "Password Invalid<br>";
        output.innerHTML += "Password not long enough!<br>";
    }
    
    // const passArray = password.split("");
    // const specialCharArray = ["!","@","$","%","^","&","*"];
    // for (let i = 0; i < password.length; i++) {
    //     for (let k = 0; k < specialCharArray.length; k++) {
    //         while (passArray[i] != specialCharArray[k]) {
    //             output.innerHTML  = "";
    //             output.innerHTML += "Password Invalid<br>";
    //             output.innerHTML += "Password does not contain special character!<br>";
    //         }
    //     }
    // }

    if (password.includes(" "))
    {
        output.innerHTML += "Password must not contain any spaces<br>"; // Prints each time
    }

    function hasUpperCase(pass) {
        return pass !== pass.toLowerCase; // true; has an uppercase
    }

    if (!hasUpperCase(password)) // if NOT true
    {
        output.innerHTML += "Password must contain an uppercase<br>";
    }

    function hasLowerCase(pass) {
        return pass !== pass.toUpperCase;
    }

    if (!hasLowerCase(password))
    {
        output.innerHTML += "Password must contain a lowercase<br>";
    }

    function hasDigit(pass)
    {
    }
}

let output = document.getElementById('output');