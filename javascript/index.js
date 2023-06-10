function handleSubmit(event) {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let facilitator = document.getElementById("facilitator").value;
  let errors = "";

  let facilitators = ["Jen", "Behdad", "Chris", "Christian", "Josh"];

  if (!firstName.match(/^[a-z]{2,}$/i)) {
    errors += "First name must have at least two characters and be only alphabetic.<br>";
  }
  if (!lastName.match(/^[a-z]{2,}$/i)) {
    errors += "Last name must have at least two characters and be only alphabetic.<br>";
  }
  if (!facilitators.includes(facilitator)) {
    errors += "Facilitator must be one of the following: " + facilitators.join(", ") + ".<br>";
  }

  if (errors !== "") {
    event.preventDefault();
    displayError(errors);
  }
}

function displayError(message) {
  var errorDiv = document.getElementById("errors");
  errorDiv.innerHTML = message;
  errorDiv.style.color = "red";
  errorDiv.style.backgroundColor = "#ffe6e6";
  errorDiv.style.border = "1px solid red";
  errorDiv.style.padding = "10px";
  errorDiv.style.margin = "10px 0px";
  errorDiv.style.borderRadius = "5px";
}

function handleReset() {
  var form = document.getElementById("myForm");
  form.reset();
}

window.onload = function () {
  document.getElementById("myForm").addEventListener("submit", handleSubmit);
};
