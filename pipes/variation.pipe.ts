import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'variation'
})
export class VariationPipe implements PipeTransform {

  transform(startValue: number, endValue: number, numberOfDecimal = 2, endSymbol = '%'): string {
    const signe = startValue >= endValue ?
      startValue === endValue ? '' : '-' : '+';

    return signe + ((endValue - startValue) / endValue * 100).toFixed(numberOfDecimal) + endSymbol;
  }

}
