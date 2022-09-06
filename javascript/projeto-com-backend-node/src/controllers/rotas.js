import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

const carros = ["fiesta", "saveiro"];

export function getCars(req, res) {
    res.json(carros);
}

export function getCarsId(req, res) {
    let id = req.params.id;

    return res.json([carros[id]]);
}

export function postCars(req, res) {
    let name = req.query.name;
    carros.push(name); // carros[carros.length] = name;

    return res.json([carros[carros.length - 1]]);
}

export function putCars(req, res) {
    let name = req.query.name;
    carros[req.params.id] = name;

    return res.json(carros[req.params.id]);
}

export function deleteCars(req, res) {
    let id = req.params.id;
    carros[id] = null; //deletar item;

    return res.json(carros[id]);
}

// app.get("/", (req, res) => {
//     res.send("Criando um servidor com o Express.js");
//     // res.send({
//     //     "name": "Eduardo",
//     //     "age": 22,
//     //     "address": {
//     //         "street": "Rua do Aveloz",
//     //         "number": 73,
//     //         "complement": "Apartamento"
//     //     }
//     // });
//     // res.send("<p>Olá, eu sou um paragrafo</p>");
//     // res.status(404).send("Página não encontrada!");
// });

// app.get("/sobre", (req, res) => {
//     res.send("Página sobre!");
// });

// app.get("/users/:name", (req, res) => {
//     //Recebe o parâmetro name;
//     res.send(`Usuário: ${req.params.name}`); //Exibe o parâmetro name;
// });
