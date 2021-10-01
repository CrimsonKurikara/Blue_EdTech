const prompt = require("prompt-sync")();

const nomeCompleto = prompt("Digite seu nome: ");
const endereco = prompt("Digite seu endereço: ");
const cep = +prompt("Digite seu CEP: ");
const telefone = +prompt("Digite seu telefone: ");
const mensagem = 'Seu Cep é: '+ cep + " e seu Telefone é:  " + telefone ;

console.log(nomeCompleto);
console.log(endereco);
console.log(mensagem);