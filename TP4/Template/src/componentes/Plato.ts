import Ingrediente from "./Ingrediente";

export default class Plato{

    id:number = 0;
    imagenPath:string = "";
    nombre:string = "";
    precio:number = 0;
    rubro:string = "";
    ingredientes?:Ingrediente[] = [];

}
