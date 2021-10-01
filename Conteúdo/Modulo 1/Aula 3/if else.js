const prompt = require("prompt-sync")();

//IF e ELSE

const idade = +prompt("Qual a sua idade? ");
if (idade >= 18) 
{
  console.log("Você pode consumir bebidas alcoolicas")
} 
else
{
  console.log("Você NÃO pode consumir bebidas alcoolicas")
}