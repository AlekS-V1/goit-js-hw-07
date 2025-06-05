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
    
  form.reset();

});



// table style

// const email = document.querySelector("input email");
// email.placeholder = "vfdv";

  loginForm.style.fontWeight = "400";
  loginForm.style.fontFamily = "'Montserrat', sans-serif";
  loginForm.style.fontSize = "16px";
  loginForm.style.letterSpacing = "0.04m";
  loginForm.style.color = "#2e2f42";
  loginForm.style.maxWidth = "408px";
  loginForm.style.height = "256px";
  loginForm.style.padding = "24px";
  loginForm.style.margin = "0 auto";

const textInputs = document.querySelectorAll("input");


textInputs.forEach((textInput) => {

  textInput.style.fontWeight = "400";
  textInput.style.fontFamily = "'Montserrat', sans-serif";
  textInput.style.fontSize = "16px";
  textInput.style.letterSpacing = "0.04m";
  textInput.style.color = "#2e2f42";
  textInput.style.border = "1px solid #808080";
  textInput.style.borderRadius = "4px";
  textInput.style.width = "360px";
  textInput.style.height = "40px";
  textInput.style.padding = "8px 16px";
  textInput.style.margin = "8px 0";

  textInput.addEventListener('mouseenter', () => {
    textInput.style.border = "1px solid #000000";
  });
  
  textInput.addEventListener('mouseleave', () => {
    textInput.style.border = "1px solid #808080";
  });
  
  textInput.addEventListener('focus', () => {
    textInput.placeholder = "Type area";
  })


})


const button = document.querySelector("button");

button.style.fontWeight = "500";
button.style.fontFamily = "'Montserrat', sans-serif";
button.style.fontSize = "16px";
button.style.letterSpacing = "0.04m";
button.style.color = "#ffffff";
button.style.background = "#4e75ff";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.padding = "8px 16px";
button.style.margin = "8px 140px";

button.addEventListener('mouseenter', () => {
  button.style.background = "#6c8cff";
});

button.addEventListener("mouseleave", () => {
  button.style.background = "#4e75ff";
});



