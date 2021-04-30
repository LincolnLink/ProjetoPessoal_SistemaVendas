import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CEP'
})
export class CepPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    if (value.length === 8) {

      let x =  value.replace(/(\d{5})(\d{3})/g, '\$1\-\$2');
      console.log("convertido: " , x);
      return x;
    }
    return 'error';
  }

}
