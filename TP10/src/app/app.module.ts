import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';

import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {DeliveryService} from './servicios/delivery.service';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HttpClientModule } from "@angular/common/http";
import { InstrumentoAdminComponent } from './components/instrumento-admin/instrumento-admin.component';
import { InstrumentoListaComponent } from './components/instrumento-lista/instrumento-lista.component';
import { FormsModule } from '@angular/forms';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    InstrumentosComponent,
    DetalleInstrumentoComponent,
    BuscadorComponent,
    InstrumentoAdminComponent,
    InstrumentoListaComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DeliveryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
