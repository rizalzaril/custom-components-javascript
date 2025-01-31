import "./myComponents.js";
import "./blog-item.js";
import "./blog-list.js";

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

const blogs = [
  {
    id: 1,
    title: "Cara Memulai Belajar Pemrograman",
    shortDescription:
      "Panduan untuk pemula yang ingin memulai belajar pemrograman.",
  },
  {
    id: 2,
    title: "Tips Efektif dalam Pengembangan Web",
    shortDescription:
      "Tips dan trik untuk menjadi pengembang web yang lebih baik.",
  },
  {
    id: 3,
    title: "Mengenal Konsep Web Component",
    shortDescription:
      "Pengenalan singkat tentang Web Component dan komponen-komponennya.",
  },
  {
    id: 4,
    title: "Mengenal Konsep React.js",
    shortDescription:
      "Pengenalan singkat tentang React.js dan komponen-komponennya.",
  },
  {
    id: 5,
    title: "Panduan Penggunaan Vue.js",
    shortDescription:
      "Pengenalan singkat tentang Vue.js dan komponen-komponennya.",
  },
  {
    id: 6,
    title: "Belajar Bahasa Pemrograman Python",
    shortDescription: "Cara mudah memulai belajar bahasa pemrograman Python.",
  },
];

const blogListEl = document.querySelector("blog-list");
blogListEl.setBlogList(blogs);
