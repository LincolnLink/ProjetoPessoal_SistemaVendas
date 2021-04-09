import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { cepData } from '../entidades/interface/ICepData';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }


  //GET - endpoint que pega dados de um cep!
  getCep(cep: any){

    console.log('cep digitado: ', cep);

    // Remove caracteres indesejaveis
    cep = cep.replace(/\D/g, '');

    // Verfirificar se não está vazio!
    if (cep !== ''){

      // Expressão regular para validar o CEP
      // TODO criar validação de CNPJ
      const validaCep = /^[0-9]{8}$/;

      // Valida o formato do CEP
      if (validaCep.test(cep)){

        const configUrl = `//viacep.com.br/ws/${cep}/json`;

        return this.http.get<cepData>(configUrl);

      }
      return of({});
    }
    return of({});
  }
}
