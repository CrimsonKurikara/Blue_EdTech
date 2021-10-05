const prompt = require("prompt-sync")();

let resultado = " ";
var i = 0

do
{
    i++
    resultado += i + " ";
    console.log(resultado);
}while(i<5)