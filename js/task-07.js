const qs = (selector) => document.querySelector(selector);

const inputBar = qs('#font-size-control');
const textSize = qs('#text');

inputBar.addEventListener("input", (event) => {
    let size = event.currentTarget.value + "px";
    textSize.style.fontSize = size;
});