const prompt = require("prompt-sync")();

const salario = +prompt("Qual o Valor do Seu Salário? ");
const salarioString = (salario.toFixed(2)).toString();

if(salario <= 280)
{
  const salario20 = (salario*1.2).toFixed(2);
  const salario20String = salario20.toString();
  const salario20SemAjuste  = (salario20 - salario).toFixed(2);
  const salario20SemAjusteString = salario20SemAjuste.toString();

  console.log("Seu Salário antes do reajuste é: R$ " + salarioString);
  console.log("Você receberá um aumento de 20%");
  console.log("Seu Aumento será de: R$ " + salario20SemAjusteString);
  console.log("Seu novo salário será de: R$ " + salario20String);
}
else if(salario <= 700)
{
  const salario15 = (salario*1.15).toFixed(2);
  const salario15String = salario15.toString();
  const salario15SemAjuste  = (salario15 - salario).toFixed(2);
  const salario15SemAjusteString = salario15SemAjuste.toString();

  console.log("Seu Salário antes do reajuste é: R$ " + salarioString);
  console.log("Você receberá um aumento de 15%");
  console.log("Seu Aumento será de: R$ " + salario15SemAjusteString);
  console.log("Seu novo salário será de: R$ " + salario15String);;
}
else if (salario <=1500)
{
  const salario10 = (salario*1.1).toFixed(2);
  const salario10String = salario10.toString();
  const salario10SemAjuste  = (salario10 - salario).toFixed(2);
  const salario10SemAjusteString = salario10SemAjuste.toString();

  console.log("Seu Salário antes do reajuste é: R$ " + salarioString);
  console.log("Você receberá um aumento de 10%");
  console.log("Seu Aumento será de: R$ " + salario10SemAjusteString);
  console.log("Seu novo salário será de: R$ " + salario10String);
}
else 
{
  const salario5 = (salario*1.05).toFixed(2);
  const salario5String = salario5.toString();
  const salario5SemAjuste  = (salario5 - salario).toFixed(2);
  const salario5SemAjusteString = salario5SemAjuste.toString()
  
  console.log("Seu Salário antes do reajuste é: R$ " + salarioString);
  console.log("Você receberá um aumento de 5%");
  console.log("Seu Aumento será de: R$ " + salario5SemAjusteString);
  console.log("Seu novo salário será de: R$ " + salario5String);
}