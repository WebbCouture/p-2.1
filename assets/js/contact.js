/**
 * Handles the form submission event for the element with ID "myForm".
 * Prevents default submission behavior and displays a success message if the email is valid.
 */
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting normally

  // Get the email value from the input field
  const emailField = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  // Regular expression for basic email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if the email matches the pattern
  if (!emailPattern.test(emailField.value)) {
      // If email is invalid, display the error message
      emailError.style.display = "block";
  } else {
      // If email is valid, hide the error message and display the success message
      emailError.style.display = "none";

      // Display the success message
      const messageElement = document.getElementById("successMessage");
      messageElement.textContent = "Thank you for reaching out! We will get back to you as soon as possible!";
      messageElement.style.display = "block";

      // Reset the form after showing the success message
      document.getElementById("myForm").reset();

      // Hide the success message after 5 seconds
      setTimeout(function() {
          messageElement.style.display = "none";
      }, 5000);
  }
});
