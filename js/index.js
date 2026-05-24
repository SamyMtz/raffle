// Sets quantity of tickets
function setQuantity() {
  // Checks validity
  const isValid = document.getElementById("quantity").reportValidity();
  if (isValid) {
    const quantity = document.getElementById("quantity").value;
    // Stores quantity value
    sessionStorage.setItem("quantity", JSON.stringify(quantity));
    // Changes actual page
    window.location.assign("../select.html");
  }
}

// Adds event listeners
document.getElementById("getQuantity").addEventListener("click", setQuantity);
