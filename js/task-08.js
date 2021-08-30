const qs = (selector) => document.querySelector(selector);

const form = qs('.login-form');

form.addEventListener("submit", submit);

function submit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Please, fill in all the fields!");
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}