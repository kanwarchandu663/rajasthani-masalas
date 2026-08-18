function order(productName) {
  alert(
    "Thank you for choosing Rajasthani Masala! 🌶️\n\n" +
    "You selected: " + productName
  );
}

function sendMessage(event) {
  event.preventDefault();

  alert(
    "Thank you! ❤️\n" +
    "Your message has been received."
  );

  event.target.reset();
}
