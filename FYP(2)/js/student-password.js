function togglePassword(inputId, toggleElement) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
      input.type = "text";
      toggleElement.textContent = "HIDE";
    } else {
      input.type = "password";
      toggleElement.textContent = "SHOW";
    }
  }

  