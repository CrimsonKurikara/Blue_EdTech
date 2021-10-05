const prompt = require("prompt-sync")();

//WHILE para recomeçar o programa caso os jogadores queiram
while(true)
{
    console.log("Bem vindo ao jogo de Dados");
    console.log();
    let jogadores = [];
    let rodadas = +prompt("Quantas rodadas você quer jogar? ");
    let players = +prompt("Digite o número de jogadores: ");

    for(let i = 0; i<players; i++)
    {
        let jogador = {};

        jogador.nome = prompt(`Digite o nome do jogador ${i+1}: `);
        jogador.resuldados = [];
        jogador.vitorias = 0;
        jogadores.push(jogador);
        console.log();
    }
    for(let n in jogadores)
    {
        for(let r=0; r<rodadas; r++)
        {
            jogadores[n].resuldados.push(Math.floor(Math.random()*6 +1));
        }
    }
    for (let r=0; r<rodadas; r++)
    {
        jogadores.sort(function (a,b){
            return a.resuldados[r] - b.resuldados[r]
        }).reverse();
        let position = 1
        let contadorEmpate = 0;
        let resolveEmpate = 0;
        jogadores[0].vitorias++;
        for (let j = 0; j<jogadores; j++)
        {
            if(contadorEmpate == 2)
            {
                contadorEmpate = 0;
                resolveEmpate++;
                continue;
            }
            if (resolveEmpate == 0)
            {
                switch(jogadores[0].resuldados[r])
                {
                    case jogadores[1].resuldados[r]:
                        console.log(`${position}º Posição: ${jogadores[0].nome} e  ${jogadores[1].nome} empataram!`)
                        jogadores[1].vitorias++;
                        contadorEmpate++;
                        position++;
                        break;
                }
            }
            if (contadorEmpate != 0)
            {
                contadorEmpate++;
                continue;
            }
            console.log(`${position}º Posição: ${jogadores[j].nome}, tirou o valor ${jogadores[j].resuldados[r]}`);
            position++;
        }
    }
    jogadores.sort(function(a,b){
        return a.vitorias - b.vitorias;
    }).reverse();
    if (jogadores[0].vitorias == jogadores[1].vitorias)
    {
        console.log();
        console.log(`E o campeão foi...\n    ${jogadores[0].nome} e ${jogadores[1].nome}   \nInfelizmente empataram com ${ jogadores[0].vitorias} rodadas vencidas cada um.`);
        console.log();
        console.log(`E vamos para o desempate entre \n ${jogadores[0].nome} e ${jogadores[1].nome}`)
        function desempate1(valor)
        {
            let soma1 = 0
            for (let soma of valor)
            {
                soma1 += Number(soma);
            }
            return soma1
        }
        let desempate01 = desempate1(jogadores[0].resuldados);
        function desempate2(valor)
        {
            let soma2 = 0
            for(let soma of valor)
            {
                soma2+= Number(soma);
            }
            return soma2
        }
        let desempate02 = desempate2(jogadores[1].resuldados);
        if(desempate01>desempate02)
        {
            console.log();
            console.log(`E o campeão foi...\n ${jogadores[0].nome}`);
        }
        else
        {
            console.log();
            console.log(`E o campeão foi...\n ${jogadores[1].nome}`);
        }
    }
    else
    {
        console.log(`E o campeão foi... \n ${jogadores[0].nome} \n Com ${jogadores[0].vitorias} rodadas vencidas`);
    }
    var pergunta = prompt("Você gostaria de jogar novamente? ").toLowerCase();

    if (pergunta === "sim")
    {
        console.log("Vamos recomeçar então!");
    }
    else
    {
        console.log("Obrigado por jogar, se você acabou não ganhando mais sorte na proxima!!!!");
        break
    }
}

console.log();
console.log("\nProjeto Feito Por\n\nGabriel Alfredo Pereira da Silva");