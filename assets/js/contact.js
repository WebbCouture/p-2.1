// Contact form submission handler 
document.getElementById("myForm").addEventListener("submit", function(event) {
  /**
   * Handles the form submission event.
   * Prevents the default form submission and shows a confirmation alert.
   * @param {Event} event - The submit event object.
   */
  event.preventDefault(); // Prevent actual form submission (e.g., page reload)
  alert("Form has been submitted!"); // Notify user that the form was submitted

  // Set a delayed alert to confirm form submission again after 1 second
  setTimeout(function() {
    alert("Form has been submitted!");
  }, 1000); // Delay in milliseconds (1000ms = 1 second)
});
