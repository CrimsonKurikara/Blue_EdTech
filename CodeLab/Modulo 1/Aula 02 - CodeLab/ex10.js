const prompt = require("prompt-sync")();

//Exercício 10

let valor = +prompt("Qual valor você quer converter? ");
let valorDecimal = valor.toFixed(2);
console.log(`R$ ${valorDecimal} em Dolar é US$ ${(valor/5.44).toFixed(2)}`);
console.log(`R$ ${valorDecimal} em Euro é € ${(valor/6.309).toFixed(2)}`);
console.log(`R$ ${valorDecimal} em Libra Esterlina é £ ${(valor/7.339).toFixed(2)}`);
console.log(`R$ ${valorDecimal} em Dolar Canadense é C$ ${(valor/4.3).toFixed(2)}`);
console.log(`R$ ${valorDecimal} em Peso Argentino é $ ${(valor*149.254).toFixed(2)}`);
console.log(`R$ ${valorDecimal} em Peso Chileno é CLP$ ${(valor*149.254).toFixed(2)}`);