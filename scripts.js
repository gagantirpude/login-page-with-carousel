// scripts.js
$(document).ready(function () {
  // Initialize the Slick Carousel
  $("#carousel").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed as needed
  });

  // Display a welcome message
  displayWelcomeMessage();
});

function displayWelcomeMessage() {
  alert("Welcome to our website! Enjoy your experience.");
}
