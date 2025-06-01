const loginForm = document.querySelector(".login-form");
let base = {};

const fooForm = loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    }

    base.email = email.trim();
    base.password = password.trim();

    console.log(base);
  form.reset();

});


