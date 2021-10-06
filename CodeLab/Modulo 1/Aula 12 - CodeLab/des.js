const prompt = require("prompt-sync")();

//Desafio

let pessoa = {

}

let nome = prompt("Digite seu Nome Completo: ");
console.log();
let ano = prompt("Digite seu Ano de Nascimento: ");
console.log();
let ctps = prompt("Digite o número da sua Carteira de Trabalho e Previdência Social: ");

pessoa.nome = nome;
pessoa.idade = 2021-ano;
pessoa.numeroCtps = ctps;

if(pessoa.numeroCtps[0] != 0)
{
    let anoContrat = prompt("Qual foi o Ano de Contratação do seu ultimo emprego? ");
    pessoa.anoContrat = anoContrat;
    pessoa.trabalho = 2021-pessoa.anoContrat;
    pessoa.aposenta = 35-pessoa.trabalho;
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade} anos`);
    console.log(`Número da Carteira de Trabalho e Previdência Social: ${pessoa.numeroCtps}`);
    console.log(`Faltam ${pessoa.aposenta} para você se aposentar`);
}
else
{
    pessoa.aposenta = 35;
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade} anos`);
    console.log(`Número da Carteira de Trabalho e Previdência Social: ${pessoa.numeroCtps}`);
    console.log(`Faltam ${pessoa.aposenta} para você se aposentar`);
}