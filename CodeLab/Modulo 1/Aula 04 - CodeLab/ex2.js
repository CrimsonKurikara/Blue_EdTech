const prompt = require("prompt-sync")();

const frase1 = prompt("Escreva uma Frase: ");
const frase1Replace = frase1.replace(/ /g,"");

console.log(frase1Replace);