const prompt = require("prompt-sync")();

const numero1 = +prompt("Digite um número");
const numero1String = numero1.toString();

if (numero >= 1)
{
  console.log(numero1String + " é positivo");
}
else if (numero === 0)
{
  console.log("O número digitado não é permitido")
}
else
{
 console.log (numero1String + " é negativo");
}