const prompt = require("prompt-sync")();

let voto = (valor) => {
    
    let idade = 2021-valor

    if (idade < 16)
    {
        console.log("Com " +idade+ " anos você ainda não pode votar");
    }
    else if (idade < 18 || idade > 69)
    {
        console.log("Com " +idade+ " anos o voto é opcional");
    }
    else if (idade >= 18)
    {
        console.log("Com " +idade+ " anos você é obrigado a votar");
    }
}

let anoNascimento = prompt("Qual seu ano de nascimento? ");

voto(anoNascimento);