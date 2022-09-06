// Escolha algum código executável em JavaScript feito em atividades passadas e o coloque no Node.js. Para isso, você deve ter o Node.js instalado. Após fazer essa migração, coloque seu código no arquivo "index.js", teste e tire um print.

// Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

const jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacacao) => {
    const taxa = taxaJuros / 100;
    const juros = Math.pow(1 + taxa, tempoAplicacacao);

    const montanteTwo = capitalInicial * Math.pow(1 + taxa, tempoAplicacacao);

    return montanteTwo.toFixed(2);
};

const compostos = jurosCompostos(1000, 4, 24);
console.log(compostos);
