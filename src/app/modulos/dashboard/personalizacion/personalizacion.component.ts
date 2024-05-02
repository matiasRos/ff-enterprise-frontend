import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalizacionService } from 'src/app/services/personalizacion/personalizacion.service';

@Component({
  selector: 'app-personalizacion',
  templateUrl: './personalizacion.component.html',
  styleUrls: ['./personalizacion.component.scss']
})
export class PersonalizacionComponent {
  items: any[] = [];

  constructor(private personalizacionService: PersonalizacionService, private router: Router) {
    this.personalizacionService.getPersonalizacionObservable().subscribe(items => {
      this.items = items;
      if (this.items.length == 0) {
        this.getList();
      }
    });
  }

  ngOnInit(): void {

  }

  onSelectionChanged(index: number, data: any): void {
    if (data.categoria == null) {
      return;
    }
    const categoria = this.items.find((item: any) => item.categoria === data.categoria);
    categoria.productos[index].isSelected = data.selected;
  }

  getList() {
    this.items = this.personalizacionService.listarProductos();
  }

  saveAndNext() {
    this.router.navigate(["/dashboard/personalizacion/resumen"]);
    this.personalizacionService.actualizarPersonalizacion(this.items);
  }


}
