function setQuantity() {
  const isValid = document.getElementById("quantity").reportValidity();
  if (isValid) {
    const quantity = document.getElementById("quantity").value;
    sessionStorage.setItem("quantity", JSON.stringify(quantity));
    window.location.assign("../select.html");
  }
}

document.getElementById("getQuantity").addEventListener("click", setQuantity);
