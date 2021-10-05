const prompt = require("prompt-sync")();

let filme1 ={
    nome: "O Senhor dos Anéis: A Sociedade do Anel",
    duracao: "178 min",
    ano: "2001",
    diretor: "Peter Jackson",
    atoresPrincipais: ["Elijah Wood", "Ian Mckellen", "Viggo Mortensen", "Sean Astin", "John Rhys-Davies", "Orlando Bloom", "Andy Serkis"],
    dados: function(){
        return `${this.nome} é um filme de fantasia dirigido por ${this.diretor} e baseado no primeiro volume da série O Senhor dos Anéis, de J. R. R. Tolkien. O filme narra a procura do Senhor do Escuro Sauron pelo Um Anel. O anel que atualmente está em posse do hobbit Frodo Bolseiro (${this.atoresPrincipais[0]}). O destino da Terra-média está em risco, e ele depende apenas de Frodo e mais oito companheiros que formam (${this.atoresPrincipais[1]}, ${this.atoresPrincipais[2]}, ${this.atoresPrincipais[3]}, ${this.atoresPrincipais[4]}, ${this.atoresPrincipais[5]}, ${this.atoresPrincipais[6]}), a Sociedade do Anel que agora rumam para a Montanha da Perdição, na Terra de Mordor, o único local onde o anel pode ser destruído.`
    }
}

let filme2 ={
    nome: "O Senhor dos Anéis: As Duas Torres",
    duracao: "179 min",
    ano: "2002",
    diretor: "Peter Jackson",
    atoresPrincipais: ["Elijah Wood", "Ian Mckellen", "Viggo Mortensen", "Sean Astin", "John Rhys-Davies", "Orlando Bloom", "Andy Serkis"],
    dados: function(){
        return `${this.nome} é um filme de aventura e fantasia, segunda parte da adaptação cinematográfica da trilogia literária de J. R. R. Tolkien.`
    }
}

let filme3 = {
    nome: "O Senhor dos Anéis: O Retorno do Rei",
    duracao: "201 min",
    ano: "2003",
    diretor: "Peter Jackson",
    atoresPrincipais: ["Elijah Wood", "Ian Mckellen", "Viggo Mortensen", "Sean Astin", "John Rhys-Davies", "Orlando Bloom", "Andy Serkis"],
    dados: function(){
        return `${this.nome} é um aclamado filme baseado nos livros da série O Senhor dos Anéis, escrito por J. R. R. Tolkien. Conclui a trilogia junto com os filmes The Fellowship of the Ring (2001) e The Two Towers (2002). Uma das maiores bilheteiras da história, foi vencedor de 11 Oscars, incluindo Melhor Filme, Melhor Diretor (${this.diretor}) e Melhor Roteiro Adaptado.`
    }
}

let filme4 = {
    nome: "Bad Boys",
    duracao: "119 min",
    ano: "1995",
    diretor: "Michael Bay",
    atoresPrincipais: ["Will Smith", "Martin Lawrence"],
    dados: function(){
        return `${this.nome} é um filme americano de ação-comédia lançado em 7 de abril de ${this.ano}, com direção de ${this.diretor}, e protagonizado pelos atores ${this.atoresPrincipais[1]} e ${this.atoresPrincipais[0]}. A seqüência deste filme foi lançado em 2003, chamado Bad Boys II.`
    }
}

let filme5 = {
    nome: "Bad Boys II",
    duracao: "148 min",
    ano: "2003",
    diretor: "Michael Bay",
    atoresPrincipais: ["Will Smith", "Martin Lawrence"],
    dados: function(){
        return `${this.nome} é um filme americano de ação-comédia lançado em 18 de julho de ${this.ano}, com direção de ${this.diretor} e produção de Jerry Bruckheimer. O filme conta com os atores ${this.atoresPrincipais[1]} e ${this.atoresPrincipais[0]}. Este que é a sequência do filme de 1995 de grande repercussão internacional Os Bad Boys.`
    }
}

let catalogo = [filme1, filme2, filme3, filme4, filme5];

for(let filme of catalogo){
    console.log("Filme: " + filme.nome);
    console.log("Duração:" + filme.duracao);
    console.log("Ano de Lançamento: " + filme.ano);
    console.log("Diretor: " + filme.diretor);
    console.log("Atores Principais: " + filme.atoresPrincipais);
    console.log("Dados do Filme: " + filme.dados());
    console.log();
}