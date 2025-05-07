// Contact form submission handler 
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission
  alert("Form has been submitted!");

  // Delay the second alert by 1 second
  setTimeout(function() {
    alert("This is the delayed alert!");
  }, 1000); // Delay in milliseconds
});
