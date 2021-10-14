const prompt = require("prompt-sync")();

function cena1F(nome)
{
    console.log(`Bem-vinda ${nome}`);
    console.log();
    while(true)
    {
        let pergunta = prompt("Você gostaria começar a história agora? Com S para Sim e N para Não: ").toUpperCase();
        console.log();
        if (pergunta ==="S")
        {
            break
        }
    }
    cena2();
}

function cena1M(nome)
{
    console.log(`Bem-vindo ${nome}`);
    console.log();
    while(true)
    {
        let pergunta = prompt("Você gostaria começar a história agora? Com S para Sim e N para Não: ").toUpperCase();
        console.log();
        if (pergunta ==="S")
        {
            break
        }
    }
    cena2();
}

function cena2()
{
    console.log("-Soldados em suas posições, o inimigo está vindo em nossa direção, não podemos permitir que passem pela nossa guarnição! – Gritou o general.")
    console.log();
    console.log("Os soldados foram até as suas posições, esperando pelos inimigos que vinham marchando em sua direção\nà medida que iam se aproximando da guarnição norte do território da Inglaterra, os soldados se preparavam para atacá-los\nDe repente o som da marcha inimiga é calado, apenas um guerreiro de armadura negra portando duas espadas vem em direção à guarnição.");
    console.log();
    console.log("-Abram fogo, contra este tolo! –Gritou novamente o general.");
    console.log();
    console.log("Antes que os soldados preparassem seus arcos, o guerreiro sacou uma de suas espadas e o primeiro soldado foi pego de surpresa, sua garganta foi cortada, por um ataque certeiro\no guerreiro então desembainhou sua segunda espada, e com apenas o saque de sua segunda espada desmembrou os soldados restantes\ndeixando apenas você e o general vivo.")
    console.log();
    let escolha = +prompt("Você deseja ficar e lutar ou fugir? Digite 1 para Ficar e Lutar || Digite 2 para Fugir: ");
    console.log();
    if (escolha === 1)
    {
        cena3Fight();
    }
    else
    {
        cena3Fuga();
    }
}

function cena3Fight()
{
    let escolha = prompt("Você deseja desembainhar seu espada e atacar? Com S para Sim e N para Não: ").toUpperCase();
    console.log();
    if(escolha === "S")
    {
        while(true)
        {
            let escolha2 = prompt("Você deseja atacar com sua espada novamente? Com S para Sim e N para Não: ").toUpperCase();
            let random = Math.floor(Math.random()*2+1)
            if(random === 1)
            {
                console.log("Você acertou o golpe");
            }
            else if(random === 2)
            {
                console.log("Você errou o golpe");
            }
            console.log();
            if(escolha2 === "S")
            {}
            else
            {break}
        }
    }
    cena4Fight();
}

function cena4Fight()
{
    console.log("O general desembainhou sua espada e ergue contra o desconhecido, ele o ataca sem hesitar, e perfura o meio da cabeça de seu inimigo, com o forte o homem é jogado ao chão juntamente com o capuz que o cobria\nO general confiante de que o homem estava morto, chega próximo a ele para olhar sua face, ao chegar próximo escuta uma estranha risada\no homem caído ao chão começa a se contorcer, até ficar de pé, o buraco em sua testa vagamente se fecha\no general o olhava fixamente sem acreditar no que via, seus olhos esbugalhados não conseguiam acreditar naquela cena\nseu coração batia rapidamente onde cada batimento podia ser ouvido pelo enigmático homem.");
    console.log();
    console.log("- Como isto é possível? –Gaguejava o general perplexo com o que via.");
    console.log();
    console.log("O misterioso homem olha fixamente nos olhos do general – Humanos. – Diz o ser pálido com um leve sorriso em seu rosto.");
    console.log();
    let pergunta = +prompt("Você deseja ficar e lutar ou fugir? Digite 1 para Ficar e Lutar || Digite 2 para Fugir: ");
    console.log();
    if (pergunta === 1)
    {
        cena5Fight();
    }
    else
    {
        cena3Fuga();
    }
}

function cena5Fight()
{
    console.log("Sem o general perceber o homem avança em cima dele e com uma das mãos ele arranca a traqueia do pescoço do general\no sangue jorrava da garganta do homem manchando todo o seu uniforme, ele então avança em sua direção e arranca sua cabeça.");
    console.log();
    console.log("VOCÊ MORREU, BETTER LUCK NEXT TIME");
    console.log();
}

function cena3Fuga()
{
    let escolha = +prompt("Você quer correr para a Floresta ou para o Castelo? Digite 1 para Floresta ou Digite 2 para Castelo: ");
    if (escolha === 1)
    {
        cena4Floresta();  
    }
    else
    {
        cena4Castelo();
    }
}

function cena4Floresta()
{
    console.log("Você olha para trás e  sem o general perceber o homem avança em cima dele e com uma das mãos ele arranca a traqueia do pescoço do general\no sangue jorrava da garganta do homem manchando todo o seu uniforme.");
    console.log();
    console.log("Você continua correndo até que chega a uma encruzilhada\nVocê pode seguir para a esquerda ou direita.");
    console.log();
    let escolha = +prompt("Digite 1 para Esquerda ou 2 para Direita: ");
    console.log();
    if (escolha ===1)
    {
        morteFloresta();
    }
    else
    {
        console.log("Você chegou a uma árvore gigante");
        console.log();
        let escolha2 = prompt("Você quer tentar escalar ela? Digite S para sim e N para não ").toUpperCase();
        console.log();
        if(escolha2 === "S")
        {
            morteArvore();
        }
        else
        {
            morteFloresta2();
        }
    }
}

function morteFloresta()
{
    console.log("Você continuou correndo por um tempo e acabou caindo em uma armadilha de caça e morrendo preso em estacas");
    console.log();
    console.log("VOCÊ MORREU, BETTER LUCK NEXT TIME");
    console.log();
}

function morteFloresta2()
{
    console.log("Você continua correndo por mais alguns minutos até que se cansa e acaba sendo morto pelo seu inimigo");
    console.log();
    console.log("VOCÊ MORREU, BETTER LUCK NEXT TIME");
    console.log();
}

function morteArvore()
{
    console.log("Você tenta subir na árvore apenas para perceber que está sem força nenhuma e acaba sendo pego por seu inimigo");
    console.log();
    console.log("VOCÊ MORREU, BETTER LUCK NEXT TIME");
    console.log();
}

function cena4Castelo()
{
    console.log("Você olha para trás e  sem o general perceber o homem avança em cima dele e com uma das mãos ele arranca a traqueia do pescoço do general\no sangue jorrava da garganta do homem manchando todo o seu uniforme.");
    console.log();
    console.log("Você consegue chegar até a parte de dentro do castelo, você pode tentar se esconder em 3 locais\n1-A Biblioteca\n2-O Salão\n3-A Torre");
    console.log();
    let escolha = +prompt("Digite 1 para a biblioteca || 2 para o salão || 3 para a torre: ");
    console.log();
    if(escolha === 1)
    {
        cenaCastelo1();
    }
    else if(escolha ===2)
    {
        cenaCastelo2();
    }
    else
    {
        cenaCastelo3();
    }
}

function cenaCastelo1()
{
    console.log("Você corre para a biblioteca e se esconde entre algumas prateleiras de livros");
    console.log();
    console.log("Você então escuta o inimigo abrindo a porta da biblioteca, o que gostaria de fazer ficar parado ou atacar");
    console.log();
    let escolha = +prompt("Digite 1 para lutar ou 2 para ficar parado: ");
    console.log();
    if(escolha ===1)
    {
        lutarMorte();
    }
    else
    {
        morte();
    }
}

function cenaCastelo2()
{
    console.log("Você corre para o saguão e se escondeu entre algumas das persianas");
    console.log();
    console.log("Você então escuta o inimigo abrindo a porta do saguão, o que gostaria de fazer ficar parado ou atacar");
    console.log();
    let escolha = +prompt("Digite 1 para lutar ou 2 para ficar parado: ");
    console.log();
    if(escolha ===1)
    {
        lutarMorte();
    }
    else
    {
        morte();
    }
}

function cenaCastelo3()
{
    console.log("Você corre para a torre e se escondeu na parte mais alta dela");
    console.log();
    console.log("Você então escuta o inimigo abrindo a porta da torre, o que gostaria de fazer ficar parado ou atacar");
    console.log();
    let escolha = +prompt("Digite 1 para lutar ou 2 para ficar parado: ");
    console.log();
    if(escolha ===1)
    {
        lutarMorte();
    }
    else
    {
        morte();
    }
}

function lutarMorte()
{
    let escolha = prompt("Você deseja desembainhar seu espada e atacar? Com S para Sim e N para Não: ").toUpperCase();
    console.log();
    if(escolha === "S")
    {
        while(true)
        {
            let escolha2 = prompt("Você deseja atacar com sua espada novamente? Com S para Sim e N para Não: ").toUpperCase();
            let random = Math.floor(Math.random()*2+1);
            if(random === 1)
            {
                console.log("Você acertou o golpe");
            }
            else if(random === 2)
            {
                console.log("Você errou o golpe");
            }
            console.log();
            if(escolha2 === "S")
            {}
            else
            {break}
        }
    }
    console.log("VOCÊ MORREU, BETTER LUCK NEXT TIME");
    console.log();
}

function morte()
{
    console.log("Você foi descoberto");
    console.log();
    console.log("VOCÊ MORREU, BETTER LUCK NEXT TIME");
    console.log();
}

while(true)
{
    console.log("Bem Vindo ao Jogo Corvo Cinzento, tenha em mente que esta versão é uma Alpha e que iremos atualizar ela\nTendo isso em mente tenda um bom jogo e cuidado com sua escolhas");
    console.log();
    console.log("Antes de começar o Jogo, precisarei de alguns de dados");
    
    let persona = {}
    
    persona.nome = prompt("Diga-me, qual seu nome? ");
    console.log();
    persona.sexo = prompt("Qual seu gênero? Com F para Feminino e M para Masculino: ").toUpperCase();
    console.log();

    if(persona.sexo === "F")
    {
        cena1F(persona.nome);
    }
    else
    {
        cena1M(persona.nome);
    }

    let jogarDnv = prompt("Você deseja jogar novamente? Responda com S para sim e N para não: ").toUpperCase();
    console.log();
    if(jogarDnv === "N")
    {
        break
    }
}

console.log("\n\n");
console.log("\nProjeto Feito Por\n\nGabriel Alfredo Pereira da Silva"); 