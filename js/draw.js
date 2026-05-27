// Generates a winning number
function generateWinningNumber() {
  // Gets a random number
  let position = Math.floor(Math.random() * tickets.length);
  let number = tickets[position];
  // Shows the winning number on the element with the "winner" id
  document.getElementById("winner").textContent = number;
  // Removes the number from the tickets list
  tickets.splice(position, 1);
  // Disables "draw" button if there are no more tickets
  document.getElementById("draw").disabled = tickets.length == 0;
}

// Gets stored tickets array
let tickets = JSON.parse(sessionStorage.getItem("tickets"));

// Adds event listeners
document
  .getElementById("return")
  .addEventListener("click", () => window.history.back());

document
  .getElementById("draw")
  .addEventListener("click", generateWinningNumber);
