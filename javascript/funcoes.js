// Crie um programa que contenha os seguintes tipos de funções:

// 1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
// 2. uma função tradicional com parâmetros e um retorno de valor;
// 3. uma arrow function com parâmetros e que retorne um valor.

// Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.

// Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

function tradicional() {
    console.log(`Eu sou uma função tradicional!`);
}

function tradicionalComRetorno(a, b) {
    return a + b;
}

const arrowFunctions = (a, b, operacao) => {
    switch (operacao) {
        case "soma":
            return a + b;
        case "subtracao":
            return a - b;
        case "multiplicacao":
            return a * b;
        case "divisao":
            return a / b;
    }
};

const result = arrowFunctions(5, 5, "multiplicacao");
console.log(result);
