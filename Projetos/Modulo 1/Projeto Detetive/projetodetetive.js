var prompt = require("prompt-sync")();

console.log("Uma pessoa morreu, vou lhe fazer algumas perguntas e determinarei o que aconteceu:\nResponda com:\n0 - NÃO \n1 - SIM");

var a = +prompt("\nVocê telefonou para a vítima? ");
var b = +prompt("\nVocê esteve no local do crime? ");
var c = +prompt("\nVocê mora perto da vítima? ");
var d = +prompt("\nVocê devia para a vítima? ");
var e = +prompt("\nVocê já trabalhou com a vítima? ");

var f = a + b + c + d +e;

if (f<0)
{
    console.log("\nPor favor\nResponda novamente as pergunta mas desta vez usando apenas 0 e 1");
}
else if (f>5)
{
    console.log("\nPor favor\nResponda novamente as pergunta mas desta vez usando apenas 0 e 1");
}
else if (f === 1 || f===0)
{
    console.log("\nVocê é inocente, obrigado pelas respostas!!!!!");
}
else if (f === 2)
{
    console.log("\nVocê é suspeito pelo assassinato!!!!");
}
else if (f === 5)
{
    console.log("\nVocê está preso por assassinato!!!!!");
}
else
{
    console.log("\nVocê está preso por ser cúmplice de um assassinato!!!");
}
console.log("\nProjeto Feito Por\n\nGabriel Alfredo Pereira da Silva");