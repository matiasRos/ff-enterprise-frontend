import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { SeguridadService } from 'src/app/services/seguridad/seguridad.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NotificacionesService } from 'src/app/services/utils/notificaciones.service';
import { MatDialog } from '@angular/material/dialog';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DrawerService } from 'src/app/services/utils/drawer.service';
import { USER_KEY, getData } from 'src/app/config/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('inputElement') inputElementRef: ElementRef | undefined;
  telefono: any = "(0992) 535898";
  cartCount = 0;
  totalCart = 0;
  user: any = {};
  showMenu: any = false;
  isVisible: any = false;
  tipo_cuenta: any = "";
  estadoAnimacion = 'inactivo';
  showSuggestions: any = false;
  loading: any = false;
  suggestions: any = [];
  productos: any = [];

  private userDataSubscription?: Subscription;


  constructor( private drawerService: DrawerService, public dialog: MatDialog, private _bottomSheet: MatBottomSheet, private seguridadService: SeguridadService, public router: Router) {

  }

  toggleDrawer() {
    this.drawerService.toggle();
  }

  irLogin() {
    this.showMenu = false;
    this.router.navigate(["/login"])
  }
  irRegistro() {
    this.showMenu = false;
    this.router.navigate(["/register-corporativo"])
  }


  ngAfterViewInit() {
    this.user = getData(USER_KEY);
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
   
    this.userDataSubscription = this.seguridadService.userData$.subscribe(
      (data: any) => {
        this.user = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.userDataSubscription?.unsubscribe();
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {
    const headerPrincipal = document.querySelector('.header-principal');
    const mainContent = document.querySelector('.main-content');

    if (window.pageYOffset > 100) {
      headerPrincipal?.classList.add('header-fixed');
      mainContent?.classList.add('content-with-fixed-header');
    } else {
      headerPrincipal?.classList.remove('header-fixed');
      mainContent?.classList.remove('content-with-fixed-header');
    }
  }

  propagation(event: any) {
    event.stopPropagation();
  }


}