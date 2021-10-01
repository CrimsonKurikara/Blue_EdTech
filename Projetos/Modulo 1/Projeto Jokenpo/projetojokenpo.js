const prompt = require("prompt-sync")();

let placeHolder3 = "sim"

for(i=0;placeHolder3 == "sim";i++)

{
    console.log("Bem vindo ao Jokenpo");
    console.log();

    let regras = prompt("Antes de começarmos você gostaria de saber as regras? ").toLowerCase();

    console.log();

    if (regras === "sim")
    {
        console.log("As regras são às seguintes o computador jogará\n\nPedra, Papel ou Tesoura\n\nVocê deverá derrota-lo jogando também\n\nPedra, Papel ou Tesoura\n\nTesoura ganha de Papel\n\nPapel ganha de Pedra\n\nPedra ganha de Tesoura\n\nSeja inteligente com suas jogadas e boa sorte!!!!");
        console.log();
    }
    else
    {
        console.log();
    }

    let placeHolder = 0
    if(placeHolder === 0)
    {
        rodadas();
    }

    function dataBase(variavel)
    {
        if(variavel==="PEDRA")
        {
            return "Pedra";
        }
        else if(variavel==="PAPEL")
        {
            return "Papel";
        }
        else if (variavel==="TESOURA")
        {
            return "Tesoura"
        }
    }

    function rodadas() 
    {
        var placarJogador = 0
        var placarComputador = 0
        let rodadas = prompt("Quantas rodadas você deseja jogar? ");
        console.log();
        let placeHolder2 = 0
       
        console.log();

        for(var i = 0; i < rodadas; i++)
    
        if (placeHolder2===0)
        {
            jogadas();
        }

        function jogadas()
        {
         var escolha = dataBase(prompt("Escreva sua opção: Pedra, Papel ou Tesoura: ").toUpperCase());
         var opcoes = ["Pedra", "Papel", "Tesoura"];
         var computador = opcoes[Math.floor(Math.random()* opcoes.length)];

         if(escolha === computador)
         {
             console.log(`Você escolheu ${escolha} e o computador ${computador}, é um EMPATE`);
             console.log();
         }
             if(escolha === "Pedra" && computador ==="Papel")
         {
             console.log(`Você escolheu ${escolha} e o computador ${computador}, você perder a rodada`);
             console.log();
             placarComputador = placarComputador + 1;
         }
         if(escolha === "Papel" && computador ==="Tesoura")
         {
             console.log(`Você escolheu ${escolha} e o computador ${computador}, você perder a rodada`);
             console.log();
             placarComputador = placarComputador + 1;
         }
         if(escolha === "Tesoura" && computador=== "Pedra")
         {
                console.log(`Você escolheu ${escolha} e o computador ${computador}, você perder a rodada`);
                console.log();
                placarComputador = placarComputador + 1; 
         }
         if(escolha === "Papel" && computador === "Pedra")
         {
             console.log(`Você escolheu ${escolha} e o computador ${computador}, Parabéns você venceu a rodada`);
             console.log();
             placarJogador = placarJogador + 1;
         }
         if(escolha === "Tesoura" && computador === "Papel")
         {
                console.log(`Você escolheu ${escolha} e o computador ${computador}, Parabéns você venceu a rodada`);
                console.log();
            placarJogador = placarJogador + 1;
         }
         if(escolha === "Pedra" && computador ==="Tesoura")
         {
                console.log(`Você escolheu ${escolha} e o computador ${computador}, Parabéns você venceu a rodada`);
                console.log();
                placarJogador = placarJogador + 1;
         }
        }
        if (placarJogador === placarComputador)
        {
            console.log(`O resultado da partida com ${placarJogador} a ${placarComputador} temos um Empate, boa sorte na proxima`);
            console.log();
        }
        if (placarJogador>placarComputador)
        {
            console.log(`O resultado da partida com ${placarJogador}  vitórias o vencedor foi você, Parabéns você GANHOU <3`);
            console.log();
        }
        if (placarJogador<placarComputador)
        {
            console.log(`O resultado da partida com ${placarComputador}  vitórias o vencedor foi o Computador, infelizmente você perdeu, mas não desista e boa sorte na proxima`);
            console.log();
        }
    }
placeHolder3 = prompt("Você quer jogar novamente? ").toLowerCase();
}
console.log();
console.log("\nProjeto Feito Por\n\nGabriel Alfredo Pereira da Silva");