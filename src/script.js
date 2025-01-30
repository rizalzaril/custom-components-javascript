import "./myComponents.js";

// FUNCTION CHANGE ELEMENT BY ATTRIBUTE HTML

let awesomeComponentEl = document.querySelector("awesome-component");
let paragraphComponentEl = document.querySelector("my-paragraph");

const changeColor = document.querySelector("#changeColor");
const changeSize = document.querySelector("#changeSize");
const changeFont = document.querySelector("#changeFont");
const removeElement = document.querySelector("#removeElement");

changeColor.onclick = () => {
  // Ubah/Tambahkan nilai attribute `color`
  awesomeComponentEl.setAttribute("color", "lightblue");
  paragraphComponentEl.setAttribute("color", "lightblue");
};

changeSize.onclick = () => {
  // Ubah/Tambahkan nilai attribute `size`
  awesomeComponentEl.setAttribute("size", "250");
  paragraphComponentEl.setAttribute("size", "30");
};

changeFont.onclick = () => {
  // Ubah/Tambahkan nilai attribute `font`

  paragraphComponentEl.setAttribute("font", "arial");
};

removeElement.onclick = () => {
  // Hapus elemen dari DOM
  awesomeComponentEl.remove();
  paragraphComponentEl.remove();
};

// OPTIONAL BY GET ELEMENTS BY ID

// let awesomeComponent = document.querySelector("awesome-component");

// const changeColorBtn = document.getElementById("changeColor");
// const changeSizeBtn = document.getElementById("changeSize");
// const changeFontBtn = document.getElementById("changeFont");
// const removeElementBtn = document.getElementById("removeElement");

// changeColorBtn.onclick = () => {
//   awesomeComponent.style.color = "red";
// };

// changeSizeBtn.onclick = () => {
//   awesomeComponent.style.fontSize = "24px";
// };

// changeFontBtn.onclick = () => {
//   awesomeComponent.style.fontFamily = "Arial";
// };

// removeElementBtn.onclick = () => {
//   awesomeComponent.remove();
// };
