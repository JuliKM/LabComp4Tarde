import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Instrumento } from '../entidades/Instrumento';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  public instrumentosData:Instrumento[]=[];
  public instrumentoEncontrado!: Instrumento;

  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");
   }

  public getInstrumentos():any[]{
    return this.instrumentosData;
    console.log(this.instrumentosData);
  }

  public getInstrumentoXId(idx:number):any{
      for(let instrumento of this.instrumentosData){
          if(instrumento.id == idx){
            return instrumento;
          }
      }
  }


  getInstrumentosFromDataBase(){
    return this.http.get("http://localhost:3001/api/instrumentos").pipe(
      map( instrumentosData => instrumentosData as Instrumento[]));
  }

  getInstrumentoEnBaseDatosXId(idx:string){
    return this.http.get("http://localhost:3001/api/instrumentos/" + idx).pipe(
      map( instrumentoEncontrado => instrumentoEncontrado as Instrumento));
  }

  getInstrumentosBusquedaFromDataBase(termino:string){
    return this.http.get("http://localhost:3001/api/instrumentos/busqueda/" + termino).pipe(
      map( instrumentosSearch => instrumentosSearch as Instrumento[]));
  }


    async deleteInstrumentoFetch(idInstrumento: number){
      let urlServer = 'http://localhost:3001/api/instrumentos/'+idInstrumento;
      console.log(urlServer);
      let result = await fetch(urlServer, {
          method: 'DELETE',
          headers: {
              'Content-type': 'application/json',
              'Access-Control-Allow-Origin':'*'
          },
          mode: 'cors'
      });
    }

    async guardarPOST(instrumento:Instrumento) {
      let urlServer = 'http://localhost:3001/api/instrumentos';
      let method = "POST";
      if(instrumento && instrumento.id > 0){
        urlServer = 'http://localhost:3001/api/instrumentos' + instrumento.id;
        method = "PUT";
      }
      await fetch(urlServer, {
        "method": method,
        "body": JSON.stringify(instrumento),
        "headers": {
        "Content-Type": 'application/json'
        }
      });
    }
}


