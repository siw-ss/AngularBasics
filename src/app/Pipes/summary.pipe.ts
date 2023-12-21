import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, length: number): unknown {
    if (!length) {
      length = 50;
    }
    return value.substring(0,length);
  }

}
