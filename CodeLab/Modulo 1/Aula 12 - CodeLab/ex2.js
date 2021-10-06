const prompt = require("prompt-sync")();

//Exercicio 2

let carrinho = {
    preco: 90,
    qtdd: 5,
}

carrinho.total = carrinho.preco*carrinho.qtdd;

if(carrinho.total<100)
{
    console.log(`Você comprou ${carrinho.qtdd} de passagem de onibus no preço de R$${carrinho.preco}\nO total da compra foi R$${(carrinho.total).toFixed(2)}`);
}
else if(carrinho.total<400)
{
    let desconto10 = (carrinho.total*0.9).toFixed(2)
    console.log(`Você comprou ${carrinho.qtdd} de passagem de onibus no preço de R$${carrinho.preco} e ganhou um desconto de 10%\nO total da compra foi R$${desconto10}`);
}
else if(carrinho.total<500)
{
    let desconto15 = (carrinho.total*0.85).toFixed(2)
    console.log(`Você comprou ${carrinho.qtdd} de passagem de onibus no preço de R$${carrinho.preco} e ganhou um desconto de 15%\nO total da compra foi R$${desconto15}`);
}
else
{
    let desconto20 = (carrinho.total*0.8).toFixed(2)
    console.log(`Você comprou ${carrinho.qtdd} de passagem de onibus no preço de R$${carrinho.preco} e ganhou um desconto de 20%\nO total da compra foi R$${desconto20}`);
}
