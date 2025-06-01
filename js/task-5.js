function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());

const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const backgroundColor = document.querySelector("body");

button.addEventListener("click", () => {
  backgroundColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});

