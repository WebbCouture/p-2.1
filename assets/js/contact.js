document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting normally

  // Show a single success message
  const messageElement = document.getElementById("successMessage");
  messageElement.textContent = "Thank you for reaching out! We will get back to you as soon as possible!";
});
