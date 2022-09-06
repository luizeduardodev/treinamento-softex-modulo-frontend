// Com os conceitos aprendidos, crie um programa de calculadora que:

// receba dois valores, que devem ser salvos em variáveis;
// o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos;
// com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado;
// se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma.

// Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

const num1 = parseInt(prompt("Digite o primeiro valor: "));
const operador = prompt("Escolha o operador: (+, -, *, /)");
const num2 = parseInt(prompt("Digite o segundo valor: "));

const operationResult = (num1, num2, operador) => {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            const div = num1 / num2;
            const rest = num1 % num2;

            if (rest) {
                return `Resultado da divisão de ${num1} por ${num2}: ${div.toFixed(2)} com resto: ${rest}`;
            } else {
                return `Resultado da divisão de ${num1} por ${num2}: ${div.toFixed(2)}`;
            }
    }
};

const result = operationResult(num1, num2, operador);
console.log(result);
