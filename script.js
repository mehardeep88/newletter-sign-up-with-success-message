let button = document.querySelector(".first-col button");
let success = document.querySelector(".success");
let container = document.querySelector(".container");
let email = document.getElementById("email");
let valid = document.getElementById("valid");
let input = document.querySelector(".first-col input");

function checkValidEmail() {
    return email.checkValidity();
}

button.addEventListener("click", () => {
    let isValid = checkValidEmail();
    if (isValid) {
        success.style.display = "flex";
        container.style.display = "none";
        if (success.style.display === "flex") {
            let dismiss = document.querySelector(".success button");
            dismiss.addEventListener("click", () => {
                container.style.display = "flex";
                success.style.display = "none";
                email.value="";
                valid.style = "";
                input.style = "";
            });
        }
    } else {
            valid.style.display="block";
            if (valid.style.display==="block") {
                input.style.border = "1px solid red";
                input.style.background = "pink";
            }
    }
});