const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", fontSizeChange);

function fontSizeChange() {
  text.style.fontSize = `${input.value}px`;
}
