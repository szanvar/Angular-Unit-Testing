import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouspipe'
})
export class MarvellouspipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
