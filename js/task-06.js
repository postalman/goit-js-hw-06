const inputValidation = document.querySelector("#validation-input");
const length = inputValidation.dataset.length;

inputValidation.addEventListener("blur", onInput);

function onInput() {
  if (inputValidation.value.length === +length) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
  } else {
    inputValidation.classList.remove("valid");
    inputValidation.classList.add("invalid");
  }
}
