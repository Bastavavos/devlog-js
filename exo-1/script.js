// you can write js here
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?") 
// prompt permet d'interagir avec la console, me pose la question sur la page html
 
let celsius = kelvins - 273;

let fahrenheits = celsius * (9/5) + 32;

console.log(kelvins);
console.log(Math.floor(fahrenheits)); // j'affiche l'arrondi des fahrenheits