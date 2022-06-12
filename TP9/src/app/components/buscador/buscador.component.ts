import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent implements OnInit {

  platosBusqueda: any = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private servicioDelivery: DeliveryService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.platosBusqueda = this.servicioDelivery.buscarPlatos(params['termino'])
    });

  }

  public verPlato(idx: string) {
    this.router.navigate(['/detallePlato', idx])
  }
}
