import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';
import { DeliveryService } from 'src/app/servicios/delivery.service';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {

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

  ngOnInit(): void {
  }
}
