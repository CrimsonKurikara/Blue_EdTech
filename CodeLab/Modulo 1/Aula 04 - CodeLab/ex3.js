const prompt = require("prompt-sync")();

const nome = prompt("Qual seu nome? ");
const endereco = prompt("Qual seu endereco? ");
const hobby = prompt("Qual seu Hobby? ");

console.log("Nome: " + nome.toUpperCase());
console.log("Endereco: " + endereco.toLowerCase());
console.log("Hobby: " + hobby[0].toUpperCase() + hobby.slice(1).toLowerCase());