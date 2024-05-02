import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/services/seguridad/seguridad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: any = {};
  private userDataSubscription?: Subscription;

  constructor(private seguridadService: SeguridadService) {

  }

  ngOnInit(): void {
    this.userDataSubscription = this.seguridadService.userData$.subscribe(
      (data: any) => {
        this.user = data;
      }
    );
  }
}
