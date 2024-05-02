import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSelectableComponent } from './item-selectable.component';

describe('ItemSelectableComponent', () => {
  let component: ItemSelectableComponent;
  let fixture: ComponentFixture<ItemSelectableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemSelectableComponent]
    });
    fixture = TestBed.createComponent(ItemSelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
