import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/platos.json'

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  platosFile:any = (data as any).default;
  
  constructor() {
    console.log('Servicio cargado! Este mensaje fue emitido desde el constructor de la clase delivery.service.ts');
    console.log('this.platosFile');
   }

   public getPlatos(): any[]{
    console.log(this.platosFile.platos); 
    return this.platosFile.platos;
   }

   public getPlatoXId(idx:string): any {
      for(let plato of this.platosFile.platos){
        if(plato.id == idx){
          return plato;
        }
      }
   }

   public buscarPlatos(termino:string):any[]{
    let platosArr:any[] = [];
    termino = termino.toLowerCase();
    for(let plato of this.platosFile){
    let nombre = plato.nombre.toLowerCase();
    if(nombre.indexOf(termino) >= 0){
    platosArr.push(plato);
    }
    }
    return platosArr;
    }


}
