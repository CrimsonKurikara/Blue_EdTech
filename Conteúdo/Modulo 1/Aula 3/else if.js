const prompt = require("prompt-sync")();

//IF ELSE e ELSE IF

const escola = prompt("Qual a escola que você estuda? ").toLowerCase();

if (escola === "blue")
{
  console.log("Parabéns!! Você é um Bluemmer");
}
else if (escola === "udemy")
{
  console.log("Vai terminar seu cursos");
}
else if (escola === "alura")
{
  console.log("Marketeiros");
}
else
{
  console.log("Seja feliz e Estude Mais");
}