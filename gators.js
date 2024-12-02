'use strict'

const botton = document.getElementById("button");
botton.addEventListener("click", outGators);

function outGators() {
  const getNumber = function () {
    let element = document.getElementById('input-Box');
    return Number(element.value);
  };

  for (let i = 1; i <= getNumber(); i++) {
    const frame2 = document.getElementById("frame2");
    const makeGators = document.createElement("p");
    makeGators.innerHTML = "🐊";
    frame2.appendChild(makeGators);
  }
}
