import { Component } from '@angular/core';
import { PersonalizacionService } from 'src/app/services/personalizacion/personalizacion.service';

@Component({
  selector: 'app-resumen-personalizacion',
  templateUrl: './resumen-personalizacion.component.html',
  styleUrls: ['./resumen-personalizacion.component.scss']
})
export class ResumenPersonalizacionComponent {
  items: any[] = [];
  
  constructor(private personalizacionService: PersonalizacionService) {
    this.personalizacionService.getPersonalizacionObservable().subscribe(items => {
      this.items = items;
      console.log(this.items)
    });
  }

  saveAndNext(){
    
  }

}
