import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gs'
})
export class GsPipe implements PipeTransform {

  transform(item: any, replace: any, replacement: any): any {
    if (item == null) {
      return "";
    } else {
      item = item.replaceAll(replace, replacement);
      return item;
    }

  }

}
