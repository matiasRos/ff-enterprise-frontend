import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPersonalizacionComponent } from './resumen-personalizacion.component';

describe('ResumenPersonalizacionComponent', () => {
  let component: ResumenPersonalizacionComponent;
  let fixture: ComponentFixture<ResumenPersonalizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumenPersonalizacionComponent]
    });
    fixture = TestBed.createComponent(ResumenPersonalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
