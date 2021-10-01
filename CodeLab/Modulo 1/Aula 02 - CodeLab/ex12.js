const prompt = require("prompt-sync")();

const valorAluguel = +prompt("Valor do aluguel: ");
const percentualReajuste = prompt("Percentual do reajuste: ");
const percentualReajusteDecimal = (+percentualReajuste.replace("%", "") / 100) + 1;
const valorAluguelReajustado = valorAluguel * percentualReajusteDecimal;

console.log(`O aluguel com reajuste de ${percentualReajuste}% ficará R$${valorAluguelReajustado.toFixed(2)}.`);