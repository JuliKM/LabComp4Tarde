import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Router } from '@angular/router';
import { Instrumento } from '../../entidades/Instrumento';

@Component({
  selector: 'app-instrumentos',
  templateUrl: './instrumentos.component.html',
  styleUrls: ['./instrumentos.component.css']
})
export class InstrumentosComponent implements OnInit {

  instrumentos:Instrumento[] = [];
  loading = true;

  constructor(private servicioDelivery:DeliveryService, private router:Router) { 
    
  }

  ngOnInit(): void {
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

  public verInstrumento(idx:number){
    console.log("ID INSTRUMENTO " + idx);
    this.router.navigate(['/detalleInstrumento', idx])
  }


}
