
const infoloat = document.querySelector(".info-loat");

import { data } from "../data/about1.js";
data.map((item) => {
  infoloat.innerHTML += `
    <div class="info-card" id="${item.id}">
      <img src="${item.img}">
      <div class="text">
        <h3>${item.h3}</h3>
        <p>${item.p}</p>
        <p>${item.h1}</p>
        <p>${item.h2}</p>
      </div>
    </div>
  `;
});

newFunction();
function newFunction() {
  let name;
  if (confirm("Hello, welcome to the site")) {
    name = prompt("please enter your name");
    alert("welcome " + name);
  } else {
    alert("goodbye");
  }
};
