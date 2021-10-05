const prompt = require("prompt-sync")();

//BREAK

// var count = 0;

// while (true)
// {
//     count++
//     console.log(count)
//     if(count ==2)
//     {
//         break;
//     }   
// }


// let pergunta = " ";

// while(true)
// {
//     pergunta = prompt ("Você deseja sair do aplicativo? ").toLocaleLowerCase();

//     if(pergunta === "sim")
//     {
//         break;
//     }
// }

let pergunta = "sim";

while(pergunta === "sim")
{
    pergunta = prompt("Você ainda está assistindo? ")
    console.log(pergunta);
}