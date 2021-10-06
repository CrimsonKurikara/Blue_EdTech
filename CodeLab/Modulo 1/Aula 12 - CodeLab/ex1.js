const prompt = require("prompt-sync")();

// Exercicio 1

console.log("Bem vindo ao Aprovador da Blue\nColoque os dados nas caixas a baixo e Falarei se você foi aprovado");
console.log();
let nome = prompt("Qual seu nome? ");
console.log();
let nota = +prompt("Qual a sua média? ");
let notaComDecimal = nota.toFixed(1);

pessoa = {

}

pessoa.nome = nome
pessoa.media = notaComDecimal

if (pessoa.media > 7)
{
    pessoa.situacao = "Aprovado"
}
else if (pessoa.media > 5)
{
    pessoa.situacao = "Recuperação"
}
else
{
    pessoa.situacao = "Reprovado"
}

console.log(pessoa.nome);
console.log();
console.log(pessoa.media);
console.log();
console.log(pessoa.situacao);