const password1 = document.getElementById("signup-password");
const password2 = document.getElementById("confirm-password");
const submitButton = document.querySelector("button[type='submit']");

function checkPasswordMatch() {
  const passwordsMatch = password1.value === password2.value;
  submitButton.disabled = !passwordsMatch;

  if (passwordsMatch) {
    password2.classList.remove("text-danger");
  } else {
    password2.classList.add("text-danger");
  }
}

password1.addEventListener("input", checkPasswordMatch);
password2.addEventListener("input", checkPasswordMatch);




// document.addEventListener("DOMContentLoaded", function () {
//     const password1 = document.getElementById("signup-password");
//     const password2 = document.getElementById("confirm-password");
//     const password1Label = document.getElementById("password1-label");
//     const password2Label = document.getElementById("password2-label");
//     const errorElement = document.getElementById("error-message");
//     const submitButton = document.querySelector("button[type='submit']");

//     function checkPasswordMatch() {
//         if (password1.value !== password2.value) {
//             errorElement.textContent = "Passwords do not match.";
//             password2Label.classList.add("text-danger");
//             submitButton.disabled = true;
//         } 
//         else if(password2.value !== password1.value){
//             errorElement.textContent = "Passwords do not match";
//             password1Label.classList.add("text-danger");
//             submitButton.disabled = true;
//         } 
//         else {
//             errorElement.textContent = "";
//             password2Label.classList.remove("text-danger");
//             submitButton.disabled = false;
//         }
//     }

//     password1.addEventListener("input", checkPasswordMatch);
//     password2.addEventListener("input", checkPasswordMatch);
// });






// document.addEventListener("DOMContentLoaded", function () {
//     const password1 = document.getElementById("signup-password");
//     const password2 = document.getElementById("confirm-password");
//     const password2Label = document.getElementById("password2-label");
//     const errorElement = document.getElementById("error-message");
//     const submitButton = document.querySelector("button[type='submit']");

//     function checkPasswordMatch() {
//         if (password1.value !== password2.value ) {
//             errorElement.textContent = "Passwords do not match.";
//             password2Label.classList.add("text-danger");
//             submitButton.disabled = true;
//         }
//         else {
//             errorElement.textContent = "";
//             password2Label.classList.remove("text-danger");
//             submitButton.disabled = false;
//         }
//     }

//     password1.addEventListener("input", checkPasswordMatch);
//     password2.addEventListener("input", checkPasswordMatch);
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const password1 = document.getElementById("signup-password");
//     const password2 = document.getElementById("confirm-password");
//     const password2Label = document.getElementById("password2-label");
//     const errorElement = document.getElementById("error-message");
//     const submitButton = document.querySelector("button[type='submit']");

//     password2.addEventListener("input", function () {
//         if (password1.value !== password2.value) {
//             errorElement.textContent = "Passwords do not match.";
//             password2Label.classList.add("text-danger"); 
//             submitButton.disabled = true; 
//         } else {
//             errorElement.textContent = "";
//             password2Label.classList.remove("text-danger"); 
//             submitButton.disabled = false; 
//         }
//     });
// });
