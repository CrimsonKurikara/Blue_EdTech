var prompt = require("prompt-sync")();

// AULA 5 FUNÇÃO

function olaMundo()
{
   console.log("Olá Mundo!");
}
olaMundo();

function verificaIdade()
{
    var idade = +prompt("Qual a sua idade? ");
    if(idade >= 18)
    {
       console.log("Você é maior de idade!!");
    }
    else
    {
       console.log("Você é menor de idade");
   }
}

verificaIdade();

function calculadora(operacao, numero1, numero2)
{
    if(operacao === "soma" || operacao === "+")
    {
        console.log(numero1 + numero2);
    }
    else if (operacao === "subtração" || operacao === "-")
    {
        console.log(numero1 - numero2);
    }
    else if (operacao ==="divisão" || operacao === "/")
    {
        if (numero2 === 0 || numero1 === 0)
        {
            console.log("Não é possível dividir por zero");
        }
        else
        {
            console.log(numero1/numero2);
        }
    }
    else if (operacao === "multiplicação" || operacao === "*")
    {
        console.log(numero1*numero2);
    }
    else
    {
        console.log("Operação Inválida");
    }
}
var operacaoDigitada = prompt("Digitie uma operação sendo ela:\nSoma\nSubtração\nDivisão\nMultiplicação\n").toLowerCase();
var num1Digitado = +prompt("Digite um número: ");
var num2Digitado = +prompt("Digite outro número: ");

calculadora(operacaoDigitada, num1Digitado, num2Digitado);