const prompt = require("prompt-sync")();

let jogador = {

}

jogador.nome = prompt("Qual seu nome? ");
jogador.partidas= +prompt("Quantas partidas você jogou nesse campeonato? ");
jogador.gols = []

for (let i = 0;i<jogador.partidas;i++)
{
    let pergunta = +prompt(`Quantos gols você fez na ${i+1}° partida? `);
    jogador.gols.push(pergunta);
}

function somaGols (valor)
{
    let soma = 0
    for (let gols of valor)
    {
        soma += Number(gols)
    }
    jogador.totalGols = soma
}


somaGols(jogador.gols)
console.log(jogador);