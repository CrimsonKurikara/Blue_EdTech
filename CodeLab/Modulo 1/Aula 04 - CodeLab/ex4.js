const prompt = require("prompt-sync")();

const numero = +prompt("Digite um número: ");

if (numero.toFixed(0)%2 === 0)
{
  console.log("O número é par");
} 
else
{
  console.log("O número é impar");
}