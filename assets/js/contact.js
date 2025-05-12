/**
 * Handles the form submission event for the element with ID "myForm".
 * Prevents default submission behavior and displays a success message.
 */
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting normally

  /**
   * Displays a confirmation message after form submission.
   * @type {HTMLElement}
   */
  const messageElement = document.getElementById("successMessage");
  messageElement.textContent = "Thank you for reaching out! We will get back to you as soon as possible!";
});