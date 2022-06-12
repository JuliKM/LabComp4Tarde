import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  instrumentosBusqueda:any = [];
  termino!:string;

  constructor(private activatedRoute:ActivatedRoute, private servicioDelivery:DeliveryService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      this.servicioDelivery.getInstrumentosBusquedaFromDataBase(this.termino)
      .subscribe(dataInstrumentos => {
        this.instrumentosBusqueda = [];
        for(let instrumento in dataInstrumentos){
          this.instrumentosBusqueda.push(dataInstrumentos[instrumento]);
        }
      });
    });
  }

  public verInstrumento(idx:string){
    this.router.navigate(['/detalleInstrumento', idx])
  }
}
