import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appThousandSeparator]',
})
export class ThousandSeparatorDirective {
  private readonly thousandSeparator = '.';
  private readonly decimalSeparator = ',';

  constructor(private el: ElementRef) {
    setTimeout(() => {
      console.log(this.el.nativeElement.value)
      this.el.nativeElement.value = this.formatNumber(this.el.nativeElement.value)
    }, 100);
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    this.el.nativeElement.value = this.formatNumber(value);
  }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(value: string): void {
    this.el.nativeElement.value = this.formatNumber(value);
  }

  private formatNumber(value: string): string {
    if (value!="") {
      value=value+""
      const strippedValue = value.replace(/[^\d,]+/g, '');
      const [integerPart, decimalPart] = (strippedValue || '').split(this.decimalSeparator);
      const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandSeparator);
      return decimalPart ? `${formattedIntegerPart}${this.decimalSeparator}${decimalPart}` : formattedIntegerPart;
    }
    return ""; 

  }

}

export function stripThousandSeparators(value: any): number {
  value = "" + value;
  return Number(value.replace(/\./g, ''));
}