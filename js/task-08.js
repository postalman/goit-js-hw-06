const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmit);

const formData = {};

function onSubmit(event) {
  event.preventDefault();
  onAlert(event);
  onFormData(event);
  loginForm.reset();
}

function onAlert(event) {
  if (
    !event.currentTarget.email.value ||
    !event.currentTarget.password.value
  ) {
    alert(`Всі поля повинні бути заповнені`);
  }
}

function onFormData(event) {
  formData[event.currentTarget.elements.email.name] =
    event.currentTarget.elements.email.value;
  formData[event.currentTarget.elements.password.name] =
    event.currentTarget.elements.password.value;
}
