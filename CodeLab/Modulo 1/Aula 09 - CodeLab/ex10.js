let listaStrings = ["Gabriel", "Mateus", "Vittin", "Lucao da Galera", "Gugu Gaitero"];

function maiorString (lista)
{
    let maior = "";

    for(let i = 0; i<lista.length; i++)
    {
        if (lista[i].length > maior.length)
        {
            maior = lista[i];
        }
    }
    return maior
}

let stringMaior = maiorString(listaStrings);

console.log(stringMaior);