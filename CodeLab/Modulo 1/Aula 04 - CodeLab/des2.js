const prompt = require("prompt-sync")();

const numeroInteiro = Math.floor((Math.random()*11));
const desafio = +prompt("O computador escolheu um número aleatório de 0 a 10\nQual o número? ");

if (desafio === numeroInteiro)
{
  console.log("Parabéns Você acertou!!!!");
}
else
{
  console.log("Que Pena, o número era "+numeroInteiro+ "\nTente Novamente");
}