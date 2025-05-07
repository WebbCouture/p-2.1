
  // Contact form submission handler 
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission
  alert("Form has been submitted!");
});

  setTimeout(function() {
    alert("Form has been submitted!");
  }, 1000); // Delay in milliseconds
});
