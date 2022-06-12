import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InstrumentosComponent } from './components/instrumentos/instrumentos.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { InstrumentoListaComponent } from './components/instrumento-lista/instrumento-lista.component';
import { InstrumentoAdminComponent } from './components/instrumento-admin/instrumento-admin.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'instrumentos', component: InstrumentosComponent },
    { path: 'detalleInstrumento/:id', component: DetalleInstrumentoComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: 'lista', component: InstrumentoListaComponent },
    { path: 'admin/:id', component: InstrumentoAdminComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
