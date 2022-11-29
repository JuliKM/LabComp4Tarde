"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const TestB_1 = require("./TestB");
//para transformar los datos a objetos json
app.use(express_1.default.json());
//transformar los datos de un formulario html a objetos json 
app.use(express_1.default.urlencoded({ extended: false }));
//app.use(TestA.main);
app.use(TestB_1.TestB.main);
app.listen(3000, () => {
    console.log("Servidor en puerto 3000", 3000);
});
