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

    const wordsNumber = value.split(' ').length;

    if (wordsNumber < max) {
      return value;
    }

    return value.split(' ').filter((_, index) => index < max).join(' ') + '...';
  }

}
