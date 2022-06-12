import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instrumento } from 'src/app/entidades/Instrumento';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-instrumento-lista',
  templateUrl: './instrumento-lista.component.html',
  styleUrls: ['./instrumento-lista.component.css']
})
export class InstrumentoListaComponent implements OnInit {

  instrumentos:Instrumento[] = [];
  loading = true;

  constructor(private servicioDelivery:DeliveryService, private router:Router, private modalService: NgbModal) {

  }

  ngOnInit() {

    this.servicioDelivery.getInstrumentosFromDataBase()
    .subscribe(data => {
      console.log(data);
      for(let instrumento in data){
        console.log(data[instrumento]);
        this.instrumentos.push(data[instrumento]);
      }
      this.loading = false;
    });
  }

  delete(idInstrumento:number){
    var opcion = confirm("Esta seguro que desea eliminar el instrumento?");
    if (opcion == true) {
      this.servicioDelivery.deleteInstrumentoFetch(idInstrumento);
      location.reload();
    }

  }

}
