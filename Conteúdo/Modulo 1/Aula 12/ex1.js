const prompt = require("prompt-sync")();

const filme01 = {
    nome: "Vingadores",
    duracao: 160,
    ano: 2019,
    atores: ["José", "Maria", "Augusto"],
    dados() {
        return `O filme ${this.nome} com a duração de ${this.duracao}min, foi lançado em ${this.ano} os atores principais são: ${this.atores}`;
    },
};
let chavesFilme = Object.keys(filme01)
let qtddChaves = Object.keys(filme01).length
console.log();
console.log(chavesFilme);
console.log();
console.log(qtddChaves);
console.log();
for (c=0;c<qtddChaves;c++)
{
    console.log("Indice: "+c);
    console.log("Chave: "+chavesFilme[c]);
    console.log("Valor: " +filme01[chavesFilme[c]]);
    console.log();
}