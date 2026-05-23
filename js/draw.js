// Generate a winning number
function generateWinningNumber() {
  // Get a random number
  let position = Math.floor(Math.random() * tickets.length);
  let number = tickets[position];
  // Show the winning number on the element with the "winner" id
  document.getElementById("winner").textContent = number;
  // Remove the number from the tickets list
  tickets.splice(position, 1);
  document.getElementById("draw").disabled = tickets.length == 0;
}

let tickets = JSON.parse(sessionStorage.getItem("tickets"));

document
  .getElementById("draw")
  .addEventListener("click", generateWinningNumber);
