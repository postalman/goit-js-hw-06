function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
input.addEventListener("input", onInput);

let amount = 0;

function onInput() {
  return input.value;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

function createBoxes(amount) {
  amount = onInput();
  boxes.innerHTML = "";
  let width = 30;
  let heigth = 30;

   
  for (let i = 0; i< amount; i+=1) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="
    width: ${width}px;
    height: ${heigth}px;
    background: ${getRandomHexColor()};
  "></div>`
    );

    width += 10;
    heigth += 10;
    
  }
}
