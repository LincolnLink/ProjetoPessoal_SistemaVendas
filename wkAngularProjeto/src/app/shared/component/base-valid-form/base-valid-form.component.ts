import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-valid-form',
  template: '<div></div>'
})
export abstract class BaseValidFormComponent implements OnInit {

  //
  formulario: FormGroup = {} as FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  // (VALIDAÇÃO) Verifica se o campo foi tocado e se é valido!
  isInValidTouched(campo: string){
    return (
      !this.formulario.get(campo)?.valid &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    );
  }

  // (VALIDAÇÃO) Verifica se o campo foi tocado e se é valido!
  isValidTouched(campo: string){
    // Melhor forma de pegar o campo do formulario!
    return this.formulario.get(campo)?.valid && (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
  }

  // Aplica o style do css
  aplicaCssErro(campo: string){
    return {
      'is-valid': this.isValidTouched(campo),
      'is-invalid': this.isInValidTouched (campo)
    }
  }



  verificaValidacoesForm(dateInforme: FormGroup)
  {
    Object.keys(dateInforme.controls).forEach(campo => {

      const controle = dateInforme.get(campo);
      controle?.markAsDirty();
      controle?.markAllAsTouched();

      if(controle instanceof FormGroup){
        this.verificaValidacoesForm(controle);
      }
    });
  }


}
