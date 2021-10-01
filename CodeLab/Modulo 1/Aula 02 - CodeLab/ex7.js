const prompt = require("prompt-sync")();

const valorRefeicao = 42.54;  
const valorTaxa = 10;

const resultado = valorRefeicao + valorRefeicao * (valorTaxa / 100); 

console.log(`R$ ${resultado.toFixed(2)}`);