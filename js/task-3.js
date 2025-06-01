// const form = document.querySelector("form");

const textInput = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

textInput.addEventListener("input", () => {
    
    output.textContent = textInput.value.trim() ? textInput.value.trim() : "Anonymous";
});


textInput.addEventListener("change", () => {
    
    textInput.value = textInput.value.trim() ? textInput.value.trim() : "Anonymous";
});