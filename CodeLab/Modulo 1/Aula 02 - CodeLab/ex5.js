const prompt = require("prompt-sync")();


console.log("Cadastro de Clientes");
console.log("0 - Fim");
console.log("1 - Inclui");
console.log("2 - Altera");
console.log("3 - Exclui");
console.log("4 - Consulta");

const opcao = +prompt("Opção: ");

console.log(`Você escolheu a opção ${opcao}.`);