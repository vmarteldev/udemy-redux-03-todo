import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodofake'
})
export class FilterTodofakePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
