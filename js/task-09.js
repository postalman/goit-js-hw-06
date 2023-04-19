function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const spanColor = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', onChange);

function onChange() {
  const randomColor = getRandomHexColor();

  document.body.style.background = randomColor;
  spanColor.textContent = randomColor;
}