var pw1 = document.getElementById("password");
var pw2 = document.getElementById("conf-password");
var passMessage = document.querySelector('.password-message');
function matchPassword(){

    if(pw1.value!==pw2.value)
    {
        pw1.style.borderColor="red";
        pw2.style.borderColor="red";
        passMessage.textContent = "*Passwords do not match"
    }
    else{
        passMessage.textContent = "";
        pw1.style.borderColor="blue";
        pw2.style.borderColor="blue";
    }
}

pw1.addEventListener('input',matchPassword);
pw2.addEventListener('input',matchPassword);