"use strict";
let a = Math.round(Math.random() * 10);
const b = prompt("Choisir la difficulté");
for (let i = 0; i < b; i++) {
  console.log(a);
  let d = prompt("Devinez");
  console.log(d);
  if (a == d) {
    alert("Vous avez gangé");
    break;
  }
}
