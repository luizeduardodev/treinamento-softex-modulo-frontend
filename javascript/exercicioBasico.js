// 1° Questão;
const nome = "Luiz";
const sobrenome = "Santos";
const nomeCompleto = `${nome} ${sobrenome}`;

console.log(nomeCompleto);

// 2° Questão;
const meuNome = "Luiz";
const meuSobrenome = "Santos";
const minhaIdade = 21;
const nomeResultado = `${meuNome} ${meuSobrenome} terá ${minhaIdade} anos`;

console.log(nomeResultado);

// 3° Questão;
const diaDeSemana = "Domingo";

if (diaDeSemana === "Domingo") {
    console.log(`Hoje é dia de futebol!!!`);
}

// 4° Questão;
const eMaior = (numOne, numTwo) => {
    return numOne > numTwo ? numOne : numTwo;

    //const maior = numOne > numTwo ? numOne : numTwo;
    //return maior;

    // if (numOne > numTwo) {
    //     return numOne;
    // } else {
    //     return numTwo;
    // }
};

const numMaior = eMaior(504, 2);
console.log(`O maior número é o ${numMaior}`);

// 5° Questão;
const perimetro = (raio) => {
    // const per = 3.14 * raio * 2;
    // const redondo = per.toFixed(2);
    // return redondo;

    return (3.14 * raio * 2).toFixed(1);
};

const perimetroCirculo = perimetro(3);
console.log(`O perímetro do círculo é ${perimetroCirculo}`);

const area = (raio) => {
    return 3.14 * Math.pow(raio, 2);
};

const areaCirculo = area(3);
console.log(`A área do círculo é ${areaCirculo}`);

//6° Questão;
const escreverCartao = (titulo, nome, sobrenome) => {
    return `Olá, eu me chamo ${nome} ${sobreNome} e estou escrevendo um cartão com o título ${titulo}`;
};

const cartao = escreverCartao(
    "Bem-vindo ao mundo do desenvolvimento web!",
    "Luiz",
    "Santos"
);
console.log(cartao);
