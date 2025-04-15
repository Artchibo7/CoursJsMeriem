const form = document.querySelector("form");
const $name = document.querySelector("#name");
const $email = document.querySelector("#email");
const $password = document.querySelector("#password");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function showFieldError({ $element, message = "Ce champ est requis" }) {
  hideFieldError({ $element })
  const span = document.createElement("span");
  span.classList.add("error");
  span.textContent = message;
  $element.style.borderColor = "red";
  $element.parentElement.appendChild(span);
}

function hideFieldError({ $element }) {
  $element.style.borderColor = "black";
  $element.parentElement.querySelector("span")?.remove();
}

function checkFields({ name, email, password }) {
  checkNameFields({ name });
  checkEmailFields({ email });
  checkPasswordFields({ password });
}

function checkNameFields({ name }) {
  if (!name.trim()) {
    showFieldError({
      $element: $name,
      message: "Ce champ est vide",
    });
  } else if (name && name.length < 3) {
    showFieldError({
      $element: $name,
      message: "le nom de contenir au moins 3 caractères",
    });
  } else {
    hideFieldError({ $element: $name });
  }
}

function checkEmailFields({ email }) {
  if (!email.trim()) {
    showFieldError({
      $element: $email,
      message: "Ce champ est vide",
    });
  } else if (!emailRegex.test(email)) {
    showFieldError({
      $element: $email,
      message: "L'email doit contenir un domaine valide comme .fr ou .com",
    });
  } else {
    hideFieldError({ $element: $email });
  }
}

function checkPasswordFields({ password }) {
  if (!password.trim()) {
    showFieldError({
      $element: $password,
      message: "Ce champ est vide",
    });
  } else if (!passwordRegex.test(password)) {
    showFieldError({
      $element: $password,
      message:
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre",
    });
  } else {
    hideFieldError({ $element: $password });
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkFields({
    name: $name.value,
    email: $email.value,
    password: $password.value,
  });

  // form.addEventListener("submit", function (event) {
  //   event.preventDefault();

  //   checkNameFields({ name: $name.value });
  //   checkEmailFields({ email: $email.value });
  //   checkPasswordFields({ password: $password.value });
  // });
});
