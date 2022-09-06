import express from "express";
const app = express();
const port = 3000;

import { getCars } from "./src/controllers/rotas.js";
import { getCarsId } from "./src/controllers/rotas.js";
import { postCars } from "./src/controllers/rotas.js";
import { putCars } from "./src/controllers/rotas.js";
import { deleteCars } from "./src/controllers/rotas.js";

app.get("/cars", getCars);
app.get("/cars/:id", getCarsId);
app.post("/cars", postCars);
app.put("/cars/update/:id", putCars);
app.delete("/cars/delete/:id", deleteCars);

app.listen(port, () => {
    console.log("Servidor iniciado na porta 3000");
});
