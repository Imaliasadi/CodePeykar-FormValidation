document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  emailInput.addEventListener("blur", validateEmail);
  passwordInput.addEventListener("blur", validatePassword);
  confirmPasswordInput.addEventListener("blur", validateConfirmPassword);

  function validateEmail() {
    const email = emailInput.value;
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.parentElement.classList.add("error");
    } else {
      emailError.textContent = "";
      emailInput.parentElement.classList.remove("error");
    }
  }

  function validatePassword() {
    const password = passwordInput.value;
    const passwordError = document.getElementById("password-error");
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
      passwordError.textContent =
        "Password must be at least 8 characters long and contain uppercase, lowercase, number, and symbol.";
      passwordInput.parentElement.classList.add("error");
    } else {
      passwordError.textContent = "";
      passwordInput.parentElement.classList.remove("error");
    }
  }

  function validateConfirmPassword() {
    const confirmPassword = confirmPasswordInput.value;
    const confirmPasswordError = document.getElementById(
      "confirm-password-error"
    );

    if (confirmPassword !== passwordInput.value) {
      confirmPasswordError.textContent = "Passwords do not match.";
      confirmPasswordInput.parentElement.classList.add("error");
    } else {
      confirmPasswordError.textContent = "";
      confirmPasswordInput.parentElement.classList.remove("error");
    }
  }

  form.addEventListener("submit", (event) => {
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (form.querySelectorAll(".error").length > 0) {
      event.preventDefault();
    }
  });
});
