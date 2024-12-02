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


/* 後学用に途中経過の関数類を残す */

// function bottonclick () {
//   alert("ワニ🐊");
//   console.log(resultNumber);
// }

// const getNumber = function () {
//   let element = document.getElementById('input-Box');
//   console.log(element.value);
//   console.log(typeof element.value);
// }

// getNumber()

// function makeOneGators () {
//   const frame2 = document.getElementById("frame2");
//   console.log(frame2);
//   const makeGators = document.createElement("p");
//   makeGators.innerHTML = "🐊";
//   console.log(makeGators);
//   frame2.appendChild(makeGators);
// }


// function outGators () {
//   const getNumber = function () {
//     let element = document.getElementById('input-Box');
//     console.log(element.value);
//     return element.value;
//   };
//   for (let i = 1; i <= getNumber; i++) {
//     const frame2 = document.getElementById("frame2");
//     console.log(frame2);
//     const makeGators = document.createElement("p");
//     makeGators.innerHTML = "🐊";
//     console.log(makeGators);
//     frame2.appendChild(makeGators);
//   }
// }



// function outGators() {
//   const getNumber = function () {
//     let element = document.getElementById('input-Box');
//     console.log(element.value);
//     return Number(element.value);
//   };

//   const numberOfGators = getNumber();

//   for (let i = 1; i <= numberOfGators; i++) {
//     const frame2 = document.getElementById("frame2");
//     console.log(frame2);
//     const makeGators = document.createElement("p");
//     makeGators.innerHTML = "🐊";
//     console.log(makeGators);
//     frame2.appendChild(makeGators);
//   }
// }



// makeOneGators();

