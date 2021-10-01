const prompt = require("prompt-sync")();

//Transformar em numero em STRING

var anoAtual = +prompt("Qual o ano atual? ");
var anoString = anoAtual.toString();

console.log(typeof(anoString));
console.log(anoAtual);
console.log(anoString);