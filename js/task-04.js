let counterValue = 0;

const qs = (selector) => document.querySelector(selector);

const decrement = qs('#counter').firstElementChild;
const increment = qs('#counter').lastElementChild;
const value = qs('#value');

decrement.addEventListener("click", () => {
    counterValue = counterValue - 1;
    value.textContent = counterValue;
});

increment.addEventListener("click", () => {
    counterValue = counterValue + 1;
    value.textContent = counterValue;
});