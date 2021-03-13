"use strict";
let a = Math.round(Math.random() * 10);
const b = prompt("Choisir la difficulté (le nombre d'essai)");
for (let i = 0; i < b; i++) {
  let d = prompt("Devinez");
  if (a == d) {
    alert("Vous avez gangé à l'essai :"+i);
    break;
  }
}
