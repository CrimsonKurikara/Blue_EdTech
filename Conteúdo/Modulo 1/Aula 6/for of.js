const prompt = require("prompt-sync")();

//FOR

//let nomes = ["Gabriel", "Lucão", "Mateus"];

//for(let nome of nomes)
//{
//    console.log(nome);
//}

//Exercicios 

//Exercicio 1
var nomes = ["Gabriel", "Lucas", "Mateus", "Vittin", "Vivi", "Guto",  "Gustavo"];

for(let nome of nomes)
{
    console.log(nome);
}

//Exercicio 2

var numeros = [1, 2, 3, 4, 5, 6, 7];

for(let valores of numeros)
{
    valores++
    console.log(valores);
}

//Exercicio 3

var eu = "Eu";

for(let letra of eu)
{
    console.log(letra);
}

//Desafio

var num1 = +prompt("Digite um número: ");
var num2 = +prompt("Digite um segundo número: ");
var num3 = +prompt("Digite um terceiro número: ");

var lista = [num1, num2, num3];

lista.sort(function(a,b)
{
    if (a<b) return 1;
    if (b>a) return -1;
    return 0;
});

console.log(lista);