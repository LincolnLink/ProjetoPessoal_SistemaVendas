import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormValidationsService } from '../../service/form-validations.service';

@Component({
  selector: 'msn-valid',
  templateUrl: './msn-valid.component.html',
  styleUrls: ['./msn-valid.component.css']
})
export class MsnValidComponent implements OnInit {

  // @Input() condicao: boolean | undefined = false;
  // @Input() msnErro: string = '';
  // @Input() msnErro2: string = '';
  // @Input() cssErro: string = '';

  @Input() control: AbstractControl | FormControl | undefined | null;
  @Input() label: string = '';

  @Input() cssErro: string = '';



  dismissible = true;

  constructor(private formValid: FormValidationsService) { }

  ngOnInit(): void {
  }

  // Método é executado de acordo com o tempo de uso no template
  get errorMessage(){

    for( const propertyName in this.control?.errors){

      if(this.control?.errors.hasOwnProperty(propertyName) &&
      this.control.touched){

        return this.formValid.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
      }

    }
    return null;
  }

}
