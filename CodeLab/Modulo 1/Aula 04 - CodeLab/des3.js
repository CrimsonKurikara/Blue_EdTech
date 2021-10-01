const prompt = require("prompt-sync")();

var valorSaque = +prompt("Digite o valor do saque entre R$10.00 e R$600.00: ");
var notasCem = Math.trunc(valorSaque/100);

valorSaque = valorSaque - (100*notasCem);

var notasCinquenta = Math.trunc(valorSaque/50);

valorSaque = valorSaque - (50*notasCinquenta);

var notasDez = Math.trunc(valorSaque/10);

valorSaque = valorSaque - (10*notasDez);

var notasCinco = Math.trunc(valorSaque/5);

valorSaque  = valorSaque - (5*notasCinco);

var notasUm = valorSaque;

console.log("Quantidade de notas de 100: "+notasCem);
console.log("Quantidade de notas de  50: "+notasCinquenta);
console.log("Quantidade de notas de  10: "+notasDez);
console.log("Quantidade de notas de   5: " +notasCinco);
console.log("Quantidade de notas de   1: " +notasUm);