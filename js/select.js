function createOption(value) {
  let option = document.createElement("button");
  option.classList.add = "option";
  option.textContent = value;
  option.addEventListener("click", () => select(option));
  fragment.appendChild(option);
}

function select(option) {
  option.classList.toggle("selected");
}

function reset() {
  let selection = document.querySelectorAll(".selected");
  selection.forEach((element) => element.classList.remove("selected"));
}

function setDisqualified() {
  let selection = document.querySelectorAll(".selected");
  let disqualified = [];
  if (selection.length < tickets.length) {
    selection.forEach((element) =>
      disqualified.push(parseInt(element.textContent)),
    );
    tickets = tickets.filter((num) => !disqualified.includes(num));
    sessionStorage.setItem("tickets", JSON.stringify(tickets));
    window.location.assign("../draw.html");
  } else {
    document
      .getElementById("getDisqualified")
      .setCustomValidity("Se requiere al menos un número participante");
    document.getElementById("getDisqualified").reportValidity();
  }
}

let quantity = JSON.parse(sessionStorage.getItem("quantity"));
let tickets = [...Array(parseInt(quantity)).keys()].map((i) => i + 1);
let fragment = document.createDocumentFragment();

tickets.forEach((value) => createOption(value));
document.getElementById("selector").appendChild(fragment);

document.getElementById("reset").addEventListener("click", reset);

document
  .getElementById("getDisqualified")
  .addEventListener("click", setDisqualified);
