// drawer.service.ts
import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  private drawer: MatDrawer | undefined;

  public setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  public toggle(): void {
    this.drawer!.toggle();
  }

  // Otras funciones como open y close si son necesarias
  public open(): void {
    this.drawer!.open();
  }

  public close(): void {
    this.drawer!.close();
  }
}