const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");
const form = document.querySelector("form");

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;
  
  let nameIsValid = true;
  let emailIsValid = true;
  let passwordIsValid = true;
  let passwordConfirmIsValid = true;
  
  if (!name || !/^[a-zA-Z]+$/.test(name)) {
    nameIsValid = false;
    nameInput.classList.add("error");
    nameInput.nextElementSibling.style.display = "block";
  } else {
    nameInput.classList.remove("error");
    nameInput.nextElementSibling.style.display = "none";
  }
  
  if (!email || !emailRegex.test(email)) {
    emailIsValid = false;
    emailInput.classList.add("error");
    emailInput.nextElementSibling.style.display = "block";
  } else {
    emailInput.classList.remove("error");
    emailInput.nextElementSibling.style.display = "none";
  }
  
  if (!password || password.length < 8) {
    passwordIsValid = false;
    passwordInput.classList.add("error");
    passwordInput.nextElementSibling.style.display = "block";
  } else {
    passwordInput.classList.remove("error");
    passwordInput.nextElementSibling.style.display = "none";
  }
  
  if (password !== passwordConfirm) {
    passwordConfirmIsValid = false;
    passwordConfirmInput.classList.add("error");
    passwordConfirmInput.nextElementSibling.style.display = "block";
  } else {
    passwordConfirmInput.classList.remove("error");
    passwordConfirmInput.nextElementSibling.style.display = "none";
  }
  
  if (nameIsValid && emailIsValid && passwordIsValid && passwordConfirmIsValid) {
    alert("La inscripción ha sido correcta");
  }
});
