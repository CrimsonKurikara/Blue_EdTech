const prompt = require("prompt-sync")();
//LISTA

var listaNomes = ["Alfredo", "Vttin", "Meteus", "Lucão da Galera"];
console.log(listaNomes);
console.log();

//Tamanho da lista

console.log(listaNomes.length);
console.log();

// Adicionar um elemento na lista por ultimo

listaNomes.push("Vivi");
console.log(listaNomes);
console.log();

// Excluir o ultimo elemento da lista

listaNomes.pop();
console.log(listaNomes);
console.log();

// Adicionar um elemento no inicio da lista

listaNomes.unshift("Vivi");
console.log(listaNomes);
console.log();

// Remover elementos com splice

listaNomes.splice(1,2);
console.log(listaNomes);
console.log();

// Adicionar elementos com splice

listaNomes.splice(1,0, "Gugu Gaitero");
console.log(listaNomes);
console.log();

// Substituir elementos com splice

listaNomes.splice(0, 1, "Gabriel eu");
console.log(listaNomes);
console.log();

// Ordenar elementos da lista

listaNomes.sort();
console.log(listaNomes);
console.log();

// Reverter ordem dos elementos da lista

listaNomes.reverse();
console.log(listaNomes);
console.log();

// Preenche os elementos da lista

listaNomes.fill("Gabriel");
console.log(listaNomes);
console.log();