const prompt = require("prompt-sync")();

//WHILE

//wilhe = enquanto
//for   = para

// var i = 0;

// while(i<10)
// {
//     i++
//     console.log(i);
// }

let entradaEmail = "";
let entradaSenha = "";

//entradaEmail != "admin@blue.com"
//"admin"      != "admin@blue.com"
//TRUE

//entradaSenha != "123"
//"123"        != "123"
//FALSE

//TRUE && FALSE  => FALSE

//TRUE && TRUE   => TRUE
//FALSE && TRUE  => FALSE
//FALSE && FALSE => FALSE
//TRUE && FALSE  => FALSE




//JOGO DO BRASIL || SOL NO DOMINGO => CHURRASCO

//TRUE           || TRUE           => TRUE
//TRUE           || TRUE           => TRUE
//FALSE          || TRUE           => TRUE
//TRUE           || FALSE          => TRUE
//FALSE          || FALSE          => FALSE





while(entradaEmail != "admin@blue.com" || entradaSenha != "123")
{
    entradaEmail = prompt("Digite o e-mail: ");
    entradaSenha = prompt("Digite a senha: ");
}

console.log("Fim");