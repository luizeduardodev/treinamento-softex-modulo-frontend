// 1. Crie uma variável chamada casa que execute as seguintes operações:
// 1. Atribua um objeto a variável com as propriedades:
// 1. quartos = 2
// 2. tipo = “casa”
// 3. endereco = “rua teste 123 – ZS”
// 2. Exiba no console a seguinte frase (usando TODOS as propriedades): Casa com 2 quartos localizada na rua teste 123 – ZS.

const casa = {
    quartos: 2,
    tipo: "Casa",
    endereco: "Rua teste 123 - ZS"
};

const { quartos, tipo, endereco } = casa;

console.log(`${tipo} com ${quartos} quartos localizada na ${endereco}`);

// 2. Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder'] Adicione os 3 Deuses: ('Loki', 'Odin', 'Frey') com a função push();

const deuses = ["Aegir", "Aud", "Balder"];

deuses.push("Loki", "Odin", "Frey");
console.log(deuses);

//3. Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr'] E exiba todos os nomes, dentro do html: <ul id="nomes"></ul>

const deusess = ["Aegir", "Aud", "Balder", "Bragi", "Búri", "Dag", "Dellingr"];

const ul = document.createElement("ul");
ul.setAttribute("id", "nomes");

deusess.forEach((deus) => {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = `${deus}`;

    document.body.appendChild(ul);
});

// 4. Altere o código a seguir para utilizar a função forEach de modo que a saída permaneça a mesma.

const numeros = [0, 1, 2, 3, 4, 5];

numeros.forEach(num => num % 2 == 0 ? console.log(`${num} é par`) : console.log(`${num} é Ímpar`));

// 5. Dada uma lista de objetos que contém o nome de um aluno e sua média final, implemente a função 'aprovados' que recebe esta lista e retorna  somente os alunos que foram aprovados.

const alunos = [
    { nome: "Diogo", media: 5.5 },
    { nome: "Julia", media: 9.5 },
    { nome: "Roberto", media: 1.5 },
    { nome: "Tiago", media: 6.0 }
];

const aprovados = alunos.filter(aluno => aluno.media >= 7);

console.log(aprovados[0]);

//6. Utilizando o método map, escreva a função dobrar que recebe um array de números inteiros e retorna um array com todos os valores do array original dobrados.
//Exemplo: dobrar([1,2,3]) → [2,4,6];

const array = [1, 2, 3];

const dobrar = array.map(item => item * 2);

console.log(dobrar);
