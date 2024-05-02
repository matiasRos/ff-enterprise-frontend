import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { USER_KEY, getData } from 'src/app/config/constants';
import { SeguridadService } from 'src/app/services/seguridad/seguridad.service';
import { DrawerService } from 'src/app/services/utils/drawer.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  @ViewChild('drawer') drawer: MatDrawer | undefined;

  showFiller: any = true;
  links: any = [];
  cartCount = 0;
  totalCart = 0;
  user: any;
  private userDataSubscription?: Subscription;

  ir(url: any) {
    this.drawer!.toggle();
    console.log(url);
    this.router.navigate([url]);
  }

  irWhatsapp() {
    window.location.assign("https://api.whatsapp.com/send?phone=5950992922228&text=¡Hola! Tengo una consulta.")
  }

  ngOnInit(): void {
  }

  toggleDrawer() {
    this.drawer!.toggle();
  }

  ngAfterViewInit() {
    this.drawerService.setDrawer(this.drawer!);
  }


  constructor(private seguridadService: SeguridadService, private drawerService: DrawerService, public router: Router) {
    this.links = [
      {
        "title": "Inicio",
        "url": "/"
      },
      {
        "title": "Contacto",
        "url": "/contacto"
      },
      {
        "title": "Nuestra producción",
        "url": "/nuestra-produccion-hidroponica"
      }
    ];
    
    const cuentaLink = this.links.find((link: any) => link.title === "Mi cuenta");
    this.user = getData(USER_KEY);
    if (this.user != null && !cuentaLink) {
      this.links.splice(1, 0, {
        "title": "Mi cuenta",
        "url": "/mi-cuenta"
      });
    }
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onActivate();
      }
    });
   
    this.userDataSubscription = this.seguridadService.userData$.subscribe(
      (data: any) => {
        this.user = data;
        if (this.user != null) {

          this.links.splice(1, 0, {
            "title": "Mi cuenta",
            "url": "/mi-cuenta"
          });
        }
      }
    );

  }

  onActivate() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
