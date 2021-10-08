const prompt = require("prompt-sync")();

let listaPessoas = [];
while(true)
{
    let pessoa = {}
    pessoa.nome = prompt("Digite o seu nome: ");
    pessoa.idade = 2021 - (+prompt("Digite seu ano de nascimento: "))
    pessoa.genero = prompt("Digite eu gênero com M para Masculino e F para Feminino: ");

    let pergunta = prompt("Você gostaria de continuar cadastrando pessoas? Responda com S para Sim e N para não ").toLocaleUpperCase();
    listaPessoas.push(pessoa);
    if (pergunta === "S")
    {
        continue;
    }
    else if (pergunta === "N")
    {
        break;
    }
    else
    {
        console.log("Responda apenas com S ou N");
        pergunta = prompt("Você gostaria de continuar cadastrando pessoas? Responda com S para Sim e N para não ").toLocaleUpperCase();
    }
}


function mediaIdade (valor)
{
    let soma = 0
    for(let i in valor)
    {
        let mediaSoma = listaPessoas[i].idade
        soma += mediaSoma
    }
    return soma/listaPessoas.length
}
let media = mediaIdade(listaPessoas)

let listaMulher = [];

for (let i in listaPessoas)
{
    if (listaPessoas[i].genero === "F")
    {
        listaMulher.push(listaPessoas[i]);
        console.log(listaPessoas[i]);
    }
}

let listaMaiorIdade = []

for(let i in listaPessoas)
{
    if (listaPessoas[i].idade >= 18)
    {
        listaMaiorIdade.push(listaPessoas[i]);
    }
}


console.log(`Temos cadastradas ${listaPessoas.length} pessoas`);
console.log();
console.log(`A média de idade das pessoas cadastradas é de ${Math.trunc(media)} anos`);
console.log();
for(n in listaMulher)
{
    console.log(`Essas são as mulheres cadastradas: ${listaMulher[n].nome}`);
    console.log();
}
for(m in listaMaiorIdade)
{
    console.log(`Essas são pessoas maiores de idade: ${listaMaiorIdade[m].nome}`);
    console.log();
}
