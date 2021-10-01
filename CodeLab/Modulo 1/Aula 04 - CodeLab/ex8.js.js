const prompt = require("prompt-sync")();

const nota = +prompt("Digite sua nota:");

if (nota >= 9)
{
  console.log("Parabéns Você Tirou Nota A !!! ");
}
else if (nota >= 8){
  console.log("Parabéns Você Tirou Nota B, estude mais um pouco!!");
}
else if (nota >= 7)
{
  console.log("Voce tirou um C, estude mais");
}
else if (nota >= 6)
{
  console.log("Voce tirou um D, procure sua professora e tire suas duvidas");
}
else
{
  console.log("Voce tirou um E, procure sua professora e tire suas duvidas");
}