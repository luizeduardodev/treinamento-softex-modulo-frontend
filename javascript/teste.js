// console.log(num); // Retorna undefined
// num = 6;
// var num;

// num = 6;
// console.log(num); // retorna 6
// var num;

//Exemplo 1 - Não eleva (hoist)
//var x = 1; // Inicializa x
//console.log(x + " " + y); // '1 undefined'
// var y = 1; // Initialize y
//Isso não funcionará, pois o JavaScript apenas eleva declarações

//Example 2 - Hoists
//var num1 = 3; //Declara e inicializa num1
//num2 = 4; //Inicializa num2
//console.log(num1 + " " + num2); //'3 4'
//var num2; //Declara num2 para hoisting

//Example 3 - Hoists
// a = "Cran"; //Inicializa a
// b = "berry"; //Inicializa b
// console.log(a + "" + b); // 'Cranberry';

// var a, b; //De/clara ambos a & b para hoisting

// const array = [];

// const myFunction = (...moreParams) => {
//     //Operador Rest;
//     moreParams.map((item) => {
//         array.push(item);
//         // console.log(item);
//     });
// };

// myFunction(2, 3, 4, 5, 6);

// function myFuncTwo(...params) {
//     console.log(params);
// }
// myFuncTwo(1, 2, 3, 4);

// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

const tamTrinagulo = (lado1, lado2, lado3) => {
    if (lado1 == lado2 && lado1 == lado3) {
        return `Equilátero`;
    } else if (lado1 == lado2) {
        return `Isósceles`;
    } else if (lado1 != lado2 && lado1 != lado3) {
        return `Escaleno`;
    }
};

const result = tamTrinagulo(1, 1, 1);

// Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

const dinheiro = (num) => {
    return `R$${num.toFixed(2).replace(".", ",")}`;
};

const resultado = dinheiro(0.679090089);

// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

const jurosSimples = (capitalInicial, taxaJuros, tempoAplicacacao) => {
    const juros = capitalInicial * (taxaJuros / 100) * tempoAplicacacao;
    const montante = capitalInicial + juros;

    return montante;
};

const teste = jurosSimples(1200, 2, 14);

const jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacacao) => {
    const taxa = taxaJuros / 100;
    const juros = Math.pow(1 + taxa, tempoAplicacacao);

    const montanteTwo = capitalInicial * Math.pow(1 + taxa, tempoAplicacacao);

    return montanteTwo.toFixed(2);
};

const compostos = jurosCompostos(1000, 4, 24);

// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
//Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12.
//Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.

const bhaskara = (ax2, bx, c) => {
    const arrayRaizes = [];

    const delta = Math.pow(bx, 2) - 4 * ax2 * c;

    if (delta > 0 || delta == 0) {
        const fisrtstX = (-bx + Math.sqrt(delta)) / (2 * ax2);
        const secondX = (-bx - Math.sqrt(delta)) / (2 * ax2);
        arrayRaizes.push(fisrtstX, secondX);

        return arrayRaizes;
    } else if (delta < 0) {
        return `Delta é negativo`;
    }
};

const resultBhaskara = bhaskara(4, 2, -6);
// console.log(resultBhaskara);

// 08) Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
// registro de todos as pontuações feitas por jogo.

//Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho.

//Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).

//Obs.: O primeiro jogo não conta como novo recorde do melhor.
//Exemplo:
//String: “10 20 20 8 25 3 0 30 1”
//Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

const pontuacao = (lista) => {
    let pontuacoes = lista.split(", ");
    let qtdQuebraDeRecords = 0;
    let piorJogo = 1;
    let maiorPontuacao = pontuacoes[0];
    let menorPontuacao = pontuacoes[0];

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i];
            qtdQuebraDeRecords++;
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i];
            piorJogo = i + 1;
        }
    }

    return [qtdQuebraDeRecords, piorJogo];
};

const teste1 = pontuacao(stringPontuacoes);
// console.log(teste1);

//09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação:

//Todo aluno recebe uma nota de 0 a 100.
//Alunos com nota abaixo de 40 são reprovados.
//As notas possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5.
//Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno.
//Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.

const notas = (nota) => {
    if (nota < 40) {
        console.log(`Reprovado`);
    } else if (nota % 5 > 2) {
        return nota + (5 - (nota % 5));
    } else {
        return nota;
    }
};

const resultadoNotas = notas(30);
// console.log(resultadoNotas);

const objeto = {
    nome: "Eduardo",
    idade: 21,
    cidade: "Petrolina"
};

console.log(objeto.cidade);
