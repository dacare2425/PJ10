import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiomassaComponent } from './biomassa/biomassa.component';
import { HidraulicaComponent } from './hidraulica/hidraulica.component';
import { SolarComponent } from './solar/solar.component';
import { EolicaComponent } from './eolica/eolica.component';
import { BuscadorComponent } from './buscador/buscador.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'biomassa', component: BiomassaComponent},
  { path: 'hidraulica', component: HidraulicaComponent},
  { path: 'solar', component: SolarComponent},
  { path: 'eolica', component: EolicaComponent},
  {path: 'buscador', component: BuscadorComponent}
];
