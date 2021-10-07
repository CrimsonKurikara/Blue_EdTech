const prompt = require("prompt-sync")();

//Criando um objeto com FOR

let listaFilmes = [];
let qtddFilmes = +prompt("Quantos filmes você quer adicionar na lista? ");

for (let i =0;i<qtddFilmes;i++)
{
    let filme = {};

    filme.nome = prompt("Digite o nome do filme: ");
    filme.anoLancamento= prompt("Digite o Ano de Lançamento do Filme: ");

    console.log(filme);
    listaFilmes.push(filme);
}

console.log();
console.log(listaFilmes);
console.log(listaFilmes[1].anoLancamento);
console.log();