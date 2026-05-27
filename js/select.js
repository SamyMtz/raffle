// Creates a button for each ticket
function createOption(value) {
  let option = document.createElement("button");
  option.classList.add("option");
  option.textContent = value;
  // Adds event listener
  option.addEventListener("click", () => select(option));
  fragment.appendChild(option);
}

// Toggles between selected or not
function select(option) {
  option.classList.toggle("selected");
}

// Unselects all options
function reset() {
  let selection = document.querySelectorAll(".selected");
  selection.forEach((element) => element.classList.remove("selected"));
}

// Sets which are the disqualified tickets
function setDisqualified() {
  let selection = document.querySelectorAll(".selected");
  let disqualified = [];
  // Checks there is at least one participating ticket
  if (selection.length < tickets.length) {
    // Adds disqualified tickets to an array
    selection.forEach((element) =>
      disqualified.push(parseInt(element.textContent)),
    );
    // Removes disqualified tickets from the participating tickets array
    tickets = tickets.filter((num) => !disqualified.includes(num));
    // Stores tickets array
    sessionStorage.setItem("tickets", JSON.stringify(tickets));
    // Changes actual page
    window.location.assign("../draw.html");
  } else {
    // Shows message if there isn't any participating ticket
    document
      .getElementById("getDisqualified")
      .setCustomValidity("Se requiere al menos un número participante");
    document.getElementById("getDisqualified").reportValidity();
  }
}

// Gets stored quantity value
let quantity = JSON.parse(sessionStorage.getItem("quantity"));

let tickets = [...Array(parseInt(quantity)).keys()].map((i) => i + 1);
let fragment = document.createDocumentFragment();

// Creates options and adds them to the HTML code
tickets.forEach((value) => createOption(value));
document.getElementById("selector").appendChild(fragment);

// Adds event listeners
document
  .getElementById("return")
  .addEventListener("click", () => window.history.back());

document.getElementById("reset").addEventListener("click", reset);

document
  .getElementById("getDisqualified")
  .addEventListener("click", setDisqualified);
