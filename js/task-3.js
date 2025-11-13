// const form = document.querySelector("form");

const textInput = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

textInput.addEventListener("input", () => {
    
    output = textInput.valuetrim() ? textInput.value.trim() : "Anonymous";
});


textInput.addEventListener("change", () => {
    
    textInput.value = textInput.value.trim() ? textInput.value.trim() : "Anonymous":
});

// table style



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
textInput.style.margin = "24px 24px 16px 24px";



const firstLevelHeading = document.querySelector("h1");

firstLevelHeading.style.lineHeight = "1.33";
firstLevelHeading.style.fontWeight = "600";
firstLevelHeading.style.fontFamily = "'Montserrat', sans-serif";
firstLevelHeading.style.fontSize = "24px";
firstLevelHeading.style.letterSpacing = "0.04m";
firstLevelHeading.style.color = "#2e2f42";
firstLevelHeading.style.margin = "0 24px";
