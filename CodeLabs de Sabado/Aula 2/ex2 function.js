const prompt = require("prompt-sync")();

let divisivelPor3 = (num1) =>{

    let divisao = num1%3;
    
    console.log();

    if(divisao === 0)
    {
        console.log("O numéro " +num1+ " é divisível por 3");
    }
    else
    {
        console.log("O numéro " +num1+ " não é divisível por 3");
    }
}

let numero = +prompt("Digite um número e falarei se ele é divisível por 3 ou não: ");

divisivelPor3(numero);