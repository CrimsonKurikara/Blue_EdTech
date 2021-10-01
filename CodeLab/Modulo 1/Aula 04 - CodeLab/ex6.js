const prompt = require("prompt-sync")();

const numero2 = +prompt("Digite um número: ");
const numero3 = +prompt("Digite mais um número");
const numero2String = numero2.toString()
const numero3String = numero3.toString()

if (numero2 > numero3)
{
  console.log(numero2String);
}
else if (numero2 === numero3)
{
  console.log("Números Iguais");
}
else
{
  console.log(numero3String);
}