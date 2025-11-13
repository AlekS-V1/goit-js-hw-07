function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const backgroundColor = document.querySelector("body");

button.addEventListener("click", () => {
  backgroundColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});

// table style

const widget = document.querySelector(".widget");

widget.style.width = "345px";
widget.style.height = "285px";
widget.style.padding = "100px 0";
widget.style.margin = "0 auto";



const p = document.querySelector(".widget p");

p.style.fontWeight = "400";
p.style.fontFamily = "'Montserrat', sans-serif";
p.style.fontSize = "16px";
p.style.letterSpacing = "0.04m";
p.style.color = "#2e2f42";
p.style.textAlign = "center";
p.style.margin = "0 0 16px 0";


button.style.fontWeight = "500";
button.style.fontFamily = "'Montserrat', sans-serif";
button.style.fontSize = "16px";
button.style.letterSpacing = "0.04m";
button.style.color = "#ffffff";
button.style.background = "#4e75ff";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.padding = "8px 16px";
button.style.margin = "8px 100px";

button.addEventListener('mouseenter', () => {
  button.style.background = "#6c8cff";
});

button.addEventListener("mouseleave", () => {
  button.style.background = "#4e75ff";
});
