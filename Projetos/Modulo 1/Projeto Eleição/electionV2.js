const prompt = require("prompt-sync")();

console.log("Bem Vindo as Eleições da Blue");
console.log();
console.log("Bom lembrarmos sempre que Menores de 18 anos não podem votar");
console.log();
console.log("E acima de 70 anos seu voto é Opcional");

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let nulo = 0;
let branco = 0; 

function verificaVoto (anoNascimento)
{
    let idade = 2021 - anoNascimento
    if (idade > 69)
    {
        return "Opcional"
    }
    else if(idade >= 18)
    {
        return "Obrigatório"
    }
    else
    {
        return "Negado"
    }
}
function votar()
{
    let vote = prompt("Digite seu voto para votar digite: 1 para Candidato 1 || 2 para Candidato 2 || 3 para Candidato 3 || 4 para Nulo || 5 para Branco ");
    if (vote === "1")
    {
        return 1
    }
    else if (vote === "2")
    {
        return 2
    }
    else if (vote === "3")
    {
        return 3
    }
    else if (vote === "4")
    {
        return 4
    }
    else if (vote === "5")
    {
        return 5
    }
    else
    {
        let errado = prompt("Você digitou errado, gostaria de tentar novamente? ").toLowerCase();
        if (errado === "sim")
        {
            let vote = prompt("Digite seu voto para votar digite: 1 para Candidato 1 || 2 para Candidato 2 || 3 para Candidato 3 || 4 para Nulo || 5 para Branco");
            if (vote === "1")
            {
                return 1
            }
            else if (vote === "2")
            {
                return 2
            }
            else if (vote === "3")
            {
                return 3
            }
            else if (vote === "4")
            {
                return 4
            }
            else if (vote === "5")
            {
                return 5
            }
        }
    }
}
function votacao(autozicao, voto)
{
    let anoNascimento = +prompt("Digite seu ano de Nascimento: ");
    autozicao = verificaVoto(anoNascimento);
    voto = votar();
    
    if (autozicao === "Opcional")
    {
        let opcao = prompt("Seu voto é Opcional gostaria de computa-lo? ").toLowerCase();
        if (opcao === "sim")
        {
            if (voto === 1)
            {
                candidato1++
            }
            else if (voto === 2)
            {
                candidato2++
            }
            else if (voto === 3)
            {
                candidato3++
            }
            else if (voto === 4)
            {
                nulo++
            }
            else if (voto === 5)
            {
                branco++
            }
        }
    }
    else if(autozicao === "Obrigatório")
    {
        if (voto === 1)
        {
            candidato1++
        }
        else if (voto === 2)
        {
            candidato2++
        }
        else if (voto === 3)
        {
            candidato3++
        }
        else if (voto === 4)
        {
            nulo++
        }
        else if (voto === 5)
        {
            branco++
        }  
    }
    else
    {
        console.log("Seu voto foi Negado");
    }
}

while(true)
{
    votacao();
    let votarAgain = prompt("Você gostaria de votar novamente? S para Sim ou N para Não ").toLowerCase();
    if (votarAgain === "n")
    {
        break
    }
}

let exibirResultados = () => {
    console.log("E os resultados da eleição são: ");
    console.log(`O Cadidato N°1 ${candidato1} votos.`);
    console.log(`O Cadidato N°2 ${candidato2} votos.`);
    console.log(`O Cadidato N°3 ${candidato3} votos.`);
    console.log(`Tivemos ${branco} votos em branco`);
    console.log(`Tivemos ${nulo} votos nulo`);
    console.log();

    if(candidato1>candidato2 && candidato1>candidato3)
    {
        console.log(`Com ${candidato1} votos, o candidato 1 foi eleito;`);
    }
    else if(candidato2>candidato3 && candidato2>candidato1)
    {
        console.log(`Com ${candidato2} votos, o candidato 2 foi eleito`);
    }
    else if(candidato3>candidato1 && candidato3>candidato2)
    {
        console.log(`Com ${candidato3} votos, o candidat 3 foi eleito`);
    }
    else if (candidato1 === candidato2 && candidato1 === candidato3) 
    {
        console.log("Infelizmente, temos um empate entre os Candidato 1, Candidato 2 e Candidato 3");
    } 
    else if (candidato1 === candidato2 && candidato1 > candidato3) 
    {
        console.log("Infelizmente, temos um empate entre o Candidato 1 e o Candidato 2");
    } 
    else if (candidato1 === candidato3 && candidato1 > candidato2) 
    {
        console.log("Infelizmente, temos um empate entre o Candidato 1 e o Candidato 3");
    } 
    else if (candidato2 === candidato3 && candidato2 > candidato1) 
    {
        console.log("Infelizmente, temos um empate entre o Candidato 2 e o Candidato 3");
    } 
}

exibirResultados();
console.log("\n\n");
console.log("\nProjeto Feito Por\n\nGabriel Alfredo Pereira da Silva");  