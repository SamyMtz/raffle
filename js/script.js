let ticketsQuantity = 54;
let tickets = [...Array(ticketsQuantity).keys()].map((i) => i + 1);
let disqualified = [
  25, 26, 27, 28, 29, 31, 32, 34, 35, 36, 38, 39, 42, 44, 45, 47, 49, 50, 51,
  52, 53, 54,
];
let winners = [];

// Generate a winning number
function generateWinningNumber() {
  // Check if there are still participating tickets
  if (tickets.length > 0) {
    let number;
    // Get a random number and check if it's valid
    do {
      number = Math.floor(Math.random() * ticketsQuantity) + 1;
    } while (disqualified.includes(number) || winners.includes(number));
    // Add the number to the winning numbers list
    winners.push(number);
    // Show the winning number on the element with the "winner" id 
    document.getElementById("winner").textContent = number;
    // Print the winning numbers list in the console
    console.log(winners);
  }
}

