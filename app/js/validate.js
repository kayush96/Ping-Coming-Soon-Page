const email = document.getElementById("email");
const button = document.getElementById("submit");
const error = document.getElementById("error");

let validateRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

button.addEventListener("click", function() {
  if(!validateRegex.test(email.value)) {
    error.innerHTML = "please provide a valid email address";
    email.classList.add("error-input");
    return false;
  }
});

