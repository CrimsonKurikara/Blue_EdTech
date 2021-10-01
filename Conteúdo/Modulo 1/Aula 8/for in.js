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

for (let indice in texto)
{
    console.log(indice);
}
