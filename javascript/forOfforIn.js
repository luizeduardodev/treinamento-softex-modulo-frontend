//Laço de repetição for in;
//Percorre o array ou objeto pelo indice do elemento e não pelo valor em si, como acontece com o for;

const people = {
    name: "Eduardo",
    age: 22,
    uf: "PE"
};

const array = [1, "Edu", null, ["4", "5"], "Dudu"];

const propriedadesObjeto = (people) => {
    for (const item in people) {
        console.log(item);
    }
};

propriedadesObjeto(people);

const elementosArray = (array) => {
    for (const item of array) {
        console.log(item);
    }
};

elementosArray(array);
