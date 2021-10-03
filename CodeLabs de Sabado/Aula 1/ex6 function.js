const prompt = require("prompt-sync")();

let areaTerreno = (num1 = 0, num2 = 0) => {  
    let area = num1 * num2
    
    console.log();
    console.log("A área do terreno é: " +area+"m²");
}

let largura = prompt("Qual a Largura do seu terreno em metros? ");
let comprimento = prompt("Qual o comprimento do seu terreno em metros?");

areaTerreno(largura, comprimento);