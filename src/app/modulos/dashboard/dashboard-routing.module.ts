import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { PersonalizacionComponent } from './personalizacion/personalizacion.component';
import { ResumenPersonalizacionComponent } from './personalizacion/resumen-personalizacion/resumen-personalizacion.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'personalizacion',
        component: PersonalizacionComponent,
      },
      {
        path: 'personalizacion/resumen',
        component: ResumenPersonalizacionComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
