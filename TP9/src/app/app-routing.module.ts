import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetallePlatoComponent } from './components/detalle-plato/detalle-plato.component';
import { HomeComponent } from './components/home/home.component';
import { PlatosComponent } from './components/platos/platos.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'about', component: AboutComponent},
{ path: 'platos', component: PlatosComponent},
{ path: 'detallePlato/:id', component: DetallePlatoComponent},
{ path: 'buscar/:termino', component: BuscadorComponent },
{ path: '**', pathMatch:'full', redirectTo:'home'},

//{ path: 'detallePlato/:id', component: DetallePlatoComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
