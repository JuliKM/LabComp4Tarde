import express from "express";
const app = express();

import {TestA} from "./TestA";
import {TestB} from "./TestB";

//para transformar los datos a objetos json
app.use(express.json());
//transformar los datos de un formulario html a objetos json 
app.use(express.urlencoded({extended:false}));

app.use(TestA.main);

app.use(TestB.main);

app.listen(3000, () => {
    console.log("Servidor en puerto 3000", 3000);
})