const qs = (selector) => document.querySelector(selector);

const textInput = qs('#name-input');
const output = qs('#name-output');

textInput.addEventListener("input", (e) => {
    if (e.currentTarget.value === '') {
        output.textContent = "Anonymous";
    } else {
        output.textContent = e.currentTarget.value;
    }
});