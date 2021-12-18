import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
const box = document.querySelector(".box");
const boxStyles = getComputedStyle(box);
const boxMainColor = boxStyles.getPropertyValue("--box-main-color");

const header = document.querySelector("#main-header");
header.style.setProperty("--header-bg-color", boxMainColor);