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











