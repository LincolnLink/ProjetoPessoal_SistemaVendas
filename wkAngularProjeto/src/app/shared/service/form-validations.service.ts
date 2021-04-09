import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {

  constructor() { }

  //Método que valida os campos
  getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any){

    const config:{ [key: string]: string } = {
      'required': `${fieldName} é obrigatorio`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'cepInvalido': 'CEP inválido.'
    }


    return config[validatorName];
  }

  //Método que valida o cep
  cepValidator(control: FormControl){

    const cep = control.value;

    if (cep && cep !== '')
    {
      const validacep = /^[0-9]{8}$/;
      // É preciso retornar um objeto quando da erro!
      return validacep.test(cep) ? null : { cepInvalido : true};
    }
    return null;
  }



}
