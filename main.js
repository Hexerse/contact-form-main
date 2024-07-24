const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const queryGeneral = document.getElementById("general");
const querySupport = document.getElementById("support");
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const form = document.getElementById("form");
const errors = document.querySelectorAll(".error");
const success = document.querySelector(".success");
const messages = [
  "This field is required",
  "Please select a query type",
  "Please enter a valid email address ",
  "To submit this form, please consent to being contacted",
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let i = 0;

  if (firstName.value === "" || firstName.value == null) {
    errors[0].innerHTML = messages[0];
    i++;
  } else {
    errors[0].innerHTML = "";
  }

  if (lastName.value === "" || lastName.value === null) {
    errors[1].innerHTML = messages[0];
    i++;
  } else {
    errors[1].innerHTML = "";
  }

  if (email.value === "" || email.value === null) {
    errors[2].innerHTML = messages[2];
    i++;
  } else {
    errors[2].innerHTML = "";
  }

  if (queryGeneral.checked === "false" || querySupport.checked === "false") {
    errors[3].innerHTML = messages[1];
    i++;
  } else {
    errors[3].innerHTML = "";
  }

  if (message.value === "" || message.value === null) {
    errors[4].innerHTML = messages[0];
    i++;
  } else {
    errors[4].innerHTML = "";
  }

  if (!consent.checked) {
    errors[5].innerHTML = messages[3];
    i++;
  } else {
    errors[5].innerHTML = "";
  }

  if (i === 0) {
    success.classList.toggle("hidden");
  }
});
