const prompt = require("prompt-sync")();

//Exercicio de Bubblesort

//função para começar o bubble sort
let bubbleSort = (valor) => {
    
    //for para  repetir a operação pelo numero de indices que tem o array
    for(var i = 0; i<valor.length; i++)
    {

        //for para mudar os numeros de lugar
        for (var j = 0; j < (valor.length - i - 1); j++)
        {
            //if para mudar de lugar os numero
            //numeros maiores para frente
            //numeros menores para tras
            if(valor[j]>valor[j+1])
            {
                //a variavel armazena o numero que irá pra trás
                var paraTras = valor[j];
                valor[j] = valor[j+1];
                valor[j+1] = paraTras;
            }
        }
    }
}

var listaNum = [1, 9, 5, 6, 8, 10, 2];

bubbleSort(listaNum);

console.log(listaNum);