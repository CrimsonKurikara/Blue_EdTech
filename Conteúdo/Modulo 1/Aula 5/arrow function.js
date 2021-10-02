const prompt = require("prompt-sync")();

// ARROW FUNCTION

let somar = (lista = [10, 20]) => {
    let soma = 0;
    for(let indice in lista)
    {
        soma+= lista[indice];
    }
    
    return soma;
}

let resultado = somar(listaNumero);
let listaNumero = [1, 2, 3, 4, 5];

console.log(resultado)