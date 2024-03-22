
let getOldPass = document.getElementById("myPass");
let getNewPass = document.getElementById("myNewPass");
let displayMessage = document.getElementsByClassName("message")[0];

let submit = document.getElementsByClassName("submit-btn")[0];

submit.onclick = (event) => {
    event.preventDefault();
    let oldPass = getOldPass.value;
    let newPass = getNewPass.value;

    displayMessage.style.color = "red";
    displayMessage.style.float = "left";
    displayMessage.style.marginTop = "10px";
    displayMessage.style.fontSize = "14px";
    displayMessage.style.position  = "absolute";

    if (oldPass.length < 8) {
        displayMessage.textContent = 'Your password is too short!';
        getOldPass.value = '';
        getNewPass.value = '';
    } else {
        if (oldPass !== newPass) {
            displayMessage.textContent = 'Password is inaccurate!';
            getOldPass.value = '';
            getNewPass.value = '';
        } else {
            window.location.href = "index.html";
        }
    }
}