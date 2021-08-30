const qs = (selector) => document.querySelector(selector);

const inputcheck = qs('#validation-input');

inputcheck.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === 0){
        inputcheck.classList.remove('valid');
        inputcheck.classList.remove('invalid');
    } else if (event.currentTarget.value.length === 6){
        inputcheck.classList.add('valid');
        inputcheck.classList.remove('invalid');
    } else {
        inputcheck.classList.add('invalid');
        inputcheck.classList.remove('valid');
    }
})