const prompt = require("prompt-sync")();

//FOR EACH

function mostrarConteudo(valor, indice, lista) 
{
    console.log(`O Valor é: ${valor}`);
    console.log(`O Indice é: ${indice}`);
    console.log(`A lista é: ${lista}`);
    console.log();
}

let listaNome = ["Gabriel","Lucas", "Kayque"];
listaNome.forEach(mostrarConteudo)