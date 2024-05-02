import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ShareModule } from '../share/share.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PersonalizacionComponent } from './personalizacion/personalizacion.component';
import { ResumenPersonalizacionComponent } from './personalizacion/resumen-personalizacion/resumen-personalizacion.component';


@NgModule({
  declarations: [
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    PersonalizacionComponent,
    ResumenPersonalizacionComponent
  ],
  imports: [ 
    CommonModule,
    DashboardRoutingModule,
    ShareModule
  ]
})
export class DashboardModule { }
