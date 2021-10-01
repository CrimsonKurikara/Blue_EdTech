function numeroIntero()
{
   let listaNumero = [];
   let numeroArray = [-1, -2, -3, 0, 2, 5, 8];

   for(let numero of numeroArray)
   {
       let confirme = numero;
       if(confirme > 0)
       {
           listaNumero.push(confirme);
       }
   }
   console.log(listaNumero);
}

numeroIntero();