function numeroMaior()
{
    let listaNumero = [555, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 111, 121, 198, 131, 0, 432];
    let maiorNumero = 0;
    
    // FOR TRADICIONAL
    // for(i=0;i<listaNumero.length;i++)
    // {
    //     numeroAtual = listaNumero[i]
        
    //     if(numeroAtual>=maiorNumero)
    //     {
    //         maiorNumero=numeroAtual
    //     }
    // }
    // COM FOR OF
    for(let numero of listaNumero)
    {
        if(numero>=maiorNumero)
        {
            maiorNumero=numero
        }
    }
    console.log(maiorNumero);
}
numeroMaior();