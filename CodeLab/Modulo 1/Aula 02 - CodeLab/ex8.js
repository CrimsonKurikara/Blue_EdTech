const prompt = require("prompt-sync")();

const valorTotal = 100.98;
const valorPago = 150.00; 

const resultado = valorPago - valorTotal; 

console.log(`R$${resultado.toFixed(2)}`);