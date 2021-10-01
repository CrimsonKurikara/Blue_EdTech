//EXERCÍCIO FOR EACH
//Façam uma função que exiba a informação se um número é ímpar ou par.
//Crie uma lista de números inteiros.
//Para cada item desta lista, verifique se o número é impar ou par.

function imparPar(valor)
{
    if (valor%2 === 0)
    {
        console.log(`O número ${valor} é par`);
        console.log();
    }
    if (valor%2 !== 0)
    {
        console.log(`O número ${valor} é impar`);
        console.log();
    }
}

let listaNumero = [1, 2, 3, 4, 5, 6, 7, 8];

listaNumero.forEach(imparPar)