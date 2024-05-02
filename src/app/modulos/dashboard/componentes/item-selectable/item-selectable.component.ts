import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-selectable',
  templateUrl: './item-selectable.component.html',
  styleUrls: ['./item-selectable.component.scss']
})
export class ItemSelectableComponent {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() categoria: string = '';
  @Input() isSelected: boolean = false;
  @Output() selectionChanged: EventEmitter<any> = new EventEmitter<any>();

  toggleSelection(): void {
    if (this.disabled) {
      return;
    }
    this.isSelected = !this.isSelected;
    this.selectionChanged.emit({ "selected": this.isSelected, "categoria": this.categoria });
  }
}