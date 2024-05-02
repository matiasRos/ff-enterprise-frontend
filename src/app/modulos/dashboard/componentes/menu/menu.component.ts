import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menus: any = [{
    "icon_title": "clipboard",
    "title": "Pedidos",
    "icon_action": "chevron-right",
    "url": "dashboard/pedidos"
  }, {
    "icon_title": "clipboard",
    "title": "Personalización",
    "icon_action": "chevron-right",
    "url": "/dashboard/personalizacion"
  }, {
    "icon_title": "users",
    "title": "Usuarios",
    "icon_action": "chevron-right",
    "url": "administracion/usuarios",
  },];
}
