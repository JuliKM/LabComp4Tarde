import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-instrumento-admin',
  templateUrl: './instrumento-admin.component.html',
  styleUrls: ['./instrumento-admin.component.css']
})
export class InstrumentoAdminComponent implements OnInit {


  instrumento:Instrumento = {
    id:0,
    nombre:"",
    marca:"",
    modelo:"",
    precio:0,
    costoEnvio:"",
    imagen:"",
    cantidadVendida:0 ,
    descripcion: ""
  };
  new = false;
  idinstrumento!: string;
  resultadoOperacion = "";

  constructor(private servicioDelivery:DeliveryService, private router:Router, private activeRoute:ActivatedRoute) {
    this.activeRoute.params
    .subscribe(
      parametros => {
        this.idinstrumento = parametros['id'];
        if(this.idinstrumento != "nuevo"){
          servicioDelivery.getInstrumentoEnBaseDatosXId(this.idinstrumento)
          .subscribe(instrumentoEncontrado => this.instrumento = instrumentoEncontrado as Instrumento);
        }else{
          console.log("ES NUEVO");
        }
      }
    );

  }

  ngOnInit() {

  }


  /*save() {
    if(!this.validarSiNumero(String(this.plato.precio))){
      this.resultadoOperacion = ("Ingrese un numero para el precio.");
      return;
    }
    if ( this.idplato === 'nuevo') {
      console.log('nuevo');
      this.servicioDelivery.newInstrumento(this.plato)
        .subscribe( data => {
          if(data && data.id){
            this.resultadoOperacion = "Operación finalizada con exito";
            this.router.navigate(['/lista']);
          }else{
            this.resultadoOperacion = "Error en la operación, verifique los datos";
          }
        },
        error => console.error(error));
    } else {
      console.log(`Update ${ this.idplato }`);
      this.servicioDelivery.updatePlato(this.plato)
        .subscribe( data => {
          if(data && data.id){
            this.resultadoOperacion = "Operación finalizada con exito";
            this.router.navigate(['/lista']);
            console.log(data);
          }else{
            this.resultadoOperacion = "Error en la operación, verifique los datos";
          }
        },
        error => console.error(error));
    }
  }*/

  addNew(formu: NgForm) {
    this.router.navigate(['/admin', 'nuevo']);
    formu.reset({
      id:0,
      nombre:"",
      marca:"",
      modelo:"",
      precio:0,
      costoEnvio:"",
      imagen:"",
      cantidadVendida:0 ,
      descripcion: ""
    });
  }

  validarSiNumero(numero:string):boolean{
    if(!/^([0-9])*$/.test(numero))
        return false;
    return true;

  }

  async guardarPOST() {
    this.servicioDelivery.guardarPOST(this.instrumento);
    this.resultadoOperacion = "Operación finalizada, verifique los datos";
    this.router.navigate(['/lista']);
  }

}
