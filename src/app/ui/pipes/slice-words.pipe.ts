import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceWords'
})
export class SliceWordsPipe implements PipeTransform {

  transform(value: string, max?: number ): string {
    max = max || 5;

    if (!value) {
      return '';
    }

    if (value && value.length < max) {
      return value;
    }

    return value.split(' ').filter((_, index) => index < max - 1).join(' ') + '...';
  }

}
