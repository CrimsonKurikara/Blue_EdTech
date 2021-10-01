const prompt = require("prompt-sync")();

function somaDigito(numero)
{
    var soma = 0
    for (var digito of numero)
    {
            soma += Number(digito);
    }
    return soma
}

let numeroDigitado = prompt("Digite um número positivo e irei somar os digitos deste número para você: ");

var print = somaDigito(numeroDigitado);
console.log(print);