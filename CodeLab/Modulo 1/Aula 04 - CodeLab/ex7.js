const prompt = require("prompt-sync")();

const sexo = prompt("Qual é o seu gênero: M para Masculino ou F para Feminino ").toUpperCase();

if (sexo === "M")
{
  console.log("Masculino");
}
else if (sexo ==="F")
{
  console.log("Feminino");
}
else
{
  console.log("Sexo Inválido")
}