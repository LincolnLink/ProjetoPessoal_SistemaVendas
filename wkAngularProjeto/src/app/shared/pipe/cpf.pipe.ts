import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CPF'
})
export class CpfPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value.toString().length === 11) {

      let x =  value.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '\$1.\$2.\$3\-\$4');
      console.log("convertido: " , x);
      return x;
    }
    return 'error';
  }

}
