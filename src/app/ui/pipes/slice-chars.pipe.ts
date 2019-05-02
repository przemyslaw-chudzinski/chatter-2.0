import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceChars'
})
export class SliceCharsPipe implements PipeTransform {

  transform(value: string, length): string {
    let result = value;

    if (value.length > length) {
      result = value.slice(0, 17) + '...';
    }

    return result;
  }

}
