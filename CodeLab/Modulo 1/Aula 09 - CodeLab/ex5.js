function somaArray(valor)
{
   var soma = 0
   for (var digito of valor)
   {
           soma += Number(digito);
   }
   return soma
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var somaTotal = somaArray(array);
console.log(somaTotal);