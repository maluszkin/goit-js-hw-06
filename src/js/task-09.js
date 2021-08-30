function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const qs = (selector) => document.querySelector(selector);

const body = qs('body');
const backgroundColor = qs('.color');
const buttonChange = qs('.change-color');

buttonChange.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  backgroundColor.textContent = getRandomHexColor();
})