const prompt = require("prompt-sync")();

function contar()
{
    let texto = "Ausência Eu deixarei que morra em mim o desejo de amar os teus olhos que são doces Porque nada te poderei dar senão a mágoa de me veres eternamente exausto. No entanto a tua presença é qualquer coisa como a luz e a vida E eu sinto que em meu gesto existe o teu gesto e em minha voz a tua voz. Não te quero ter porque em meu ser tudo estaria terminado . Quero só que surjas em mim como a fé nos desesperados Para que eu possa levar uma gota de orvalho nesta terra amaldiçoada Que ficou sobre a minha carne como uma nódoa do passado. Eu deixarei... tu irás e encostarás a tua face em outra face. Teus dedos enlaçarão outros dedos e tu desabrocharás para a madrugada. Mas tu não saberás que quem te colheu fui eu, porque eu fui o grande íntimo da noite. Porque eu encostei minha face na face da noite e ouvi a tua fala amorosa. Porque meus dedos enlaçaram os dedos da névoa suspensos no espaço. E eu trouxe até mim a misteriosa essência do teu abandono desordenado. Eu ficarei só como os veleiros nos pontos silenciosos. Mas eu te possuirei como ninguém porque poderei partir. E todas as lamentações do mar, do vento, do céu, das aves, das estrelas. Serão a tua voz presente, a tua voz ausente, a tua voz serenizada.";
    let quantPalavras = 1
    for(let letra of texto)
    {
        if (letra === " ")
        {
           quantPalavras++
        }
    }
    return quantPalavras
}

let palavras = contar();

console.log(palavras);
//Fazer o resto