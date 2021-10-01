const prompt = require("prompt-sync")();

// FOR IN

let numero = [10, 20, 30, 40];

for (let valores of numero)
{
    console.log(valores);
    console.log();
}

console.log();

for (let indice in numero)
{
    console.log(indice);
}

console.log();

let texto = "Gabriel";

for (let letra of texto)
{
    console.log(letra);
}

console.log();

for (let indice in numero)
{
    console.log(indice);
}


// FOR tradicional

for(let i = 0; i<10; i++)
{
    console.log(i);
}

//FOR EACH


function mostrarConteudo(valor, indice, lista) 
{
    console.log(`O Valor é: ${valor}`);
    console.log(`O Indice é: ${indice}`);
    console.log(`A lista é: ${lista}`);
    console.log();
}

let listaNome = ["Gabriel","Lucas", "Kayque"];
listaNome.forEach(mostrarConteudo)