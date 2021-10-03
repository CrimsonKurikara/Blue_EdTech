const prompt = require("prompt-sync")();

let somaImposto = (num1, num2) =>{
    
    let impostoSemPorcentagem = num2.replace("%","");
    let impostoNum = Number(impostoSemPorcentagem);
    let imposto = impostoNum/100;
    let soma = num1*(imposto+1).toFixed(2);

    console.log();
    console.log("O custo do produto passará de R$ " +num1.toFixed(2)+ " para R$ " +soma+ " Depois do imposto");
}

let custo = +prompt("Qual o custo do produto? ");
let taxa = prompt("Quanto é a taxa adicionada em porcentagem? ");

somaImposto(custo, taxa);