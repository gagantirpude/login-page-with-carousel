document.addEventListener("DOMContentLoaded", function () {
  //todo: Add an event listener to the form
  const form = document.getElementById("loginData");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Assume you have a function to validate the form, for example:
    if (validateForm()) {
      // Success message
      showAlert("success", "Login successful!");
    } else {
      // Error message
      showAlert(
        "error",
        "Login failed. Please check your OLM ID and password."
      );
    }
  });

  //todo: Function to show an alert message
  function showAlert(type, message) {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", type);
    alertDiv.textContent = message;

    document.body.appendChild(alertDiv);

    // Remove the alert after a certain time (e.g., 3 seconds)
    setTimeout(function () {
      document.body.removeChild(alertDiv);
    }, 3000);
  }

  //todo: Function to validate the form
  function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "") {
      showAlert("error", "OLM ID is required.");
      return false;
    }

    if (password.trim() === "") {
      showAlert("error", "Password is required.");
      return false;
    }

    // Add more complex validation logic here if needed

    return true; // Form is valid
  }
});
