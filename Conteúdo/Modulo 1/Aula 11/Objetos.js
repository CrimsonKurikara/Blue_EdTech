const prompt = require("prompt-sync")();

//Objetos

// let pessoa = {
//     nome: "Gabriel",
//     idade: 22,
//     genero: "Masculino"
// }

// console.log(pessoa);
// console.log();
// console.log(pessoa.nome);

let filme = {
    nome: "Lord of the Rings Fellowship of the Ring",
    idadeRecomendada: 12,
    duracao: "2h58m",
    diretor: "Peter Jackson"
}

filme.genero = "Ação/Aventura";

console.log(filme);
console.log();
console.log(filme.idadeRecomendada);
console.log();

delete filme.genero;

console.log(filme);
console.log();

filme.persongens = ["Frodo", "Sam", "Gimli", "Legolas", "Aragorn"];

console.log(filme);
console.log();
console.log(filme.persongens[1]);

filme.bio = function(){
    return `O nome do filme é ${this.nome} ele é recomendado para a partir de ${this.idadeRecomendada} anos, ele tem ${this.duracao} de duração, é dirigido por ${this.diretor}, e tem os seguintes personagens ${this.persongens[0]}, ${this.persongens[1]}, ${this.persongens[2]}, ${this.persongens[3]}, ${this.persongens[4]}.`
}

console.log();
console.log(filme.bio());
console.log();