const prompt = require("prompt-sync")();

let senha = "268437";
let senhaDigitada = "";
while (senhaDigitada != senha)
{
    senhaDigitada = prompt("Digite sua senha: ")
    if (senhaDigitada !== senha)
    {
        console.log("Sua senha está errada, digite novamente.");
    }
    else
    {
        console.log("Bem-vindo ao Now");
    }
}