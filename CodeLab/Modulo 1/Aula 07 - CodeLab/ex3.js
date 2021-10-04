const prompt = require("prompt-sync")();

function contarPalavras(texto)
{

  let qtdPalavras = 0;
  let existeSeparador = true;

  for (let caracter of texto)
  {
    console.log(caracter);

    if (caracter == " ")
    {
      existeSeparador = true;
      continue;
    }

    if (existeSeparador)
    {
      qtdPalavras++;
      existeSeparador = false;
      console.log("Qtd de palavras: " + qtdPalavras);
    }
  }

  console.log();
  console.log();

  return qtdPalavras;

}
contarPalavras("  Olá   Mundo Tudo Bem");