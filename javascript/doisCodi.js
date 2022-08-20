// Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário.

// O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.

// Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

//1° Código;
const firstNote = parseFloat(prompt("Informe a primeira nota: "));
const secondNote = parseFloat(prompt("Informe a segunda nota: "));
const thirdNote = parseFloat(prompt("Informe a terceira nota: "));

const result = (firstNote, secondNote, thirdNote) => {
    const average = (firstNote + secondNote + thirdNote) / 3;
    const studentResult = average >= 7 ? `Aprovado` : `Reprovado`;

    return studentResult;
};

const finalResult = result(firstNote, secondNote, thirdNote);
console.log(finalResult);

// O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.

//2° Código;
const primeiraNota = parseFloat(prompt("Informe a primeira nota: "));
const segundaNota = parseFloat(prompt("Informe a segunda nota: "));

const resultado = (primeiraNota, segundaNota) => {
    const media = (primeiraNota + segundaNota) / 2;
    const condicao = media >= 7 ? `Aprovado` : `Nota mínima que você deve tirar na próxima prova para poder passar com nota 7: ${7 - media} pontos`;

    return condicao;
};

const teste = resultado(primeiraNota, segundaNota);
console.log(teste);
