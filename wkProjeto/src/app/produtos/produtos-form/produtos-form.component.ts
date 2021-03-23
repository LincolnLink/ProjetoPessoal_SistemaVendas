import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
//Serviços e classes
import { Produtos } from '../../shared/Entidades/classes/produtosData';
import { ProdutosService } from './../../shared/service/produtos.service';
import { ProdutosDataService } from './../../shared/service/produtos-data.service';


@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})
export class ProdutosFormComponent implements OnInit {

  formulario: FormGroup = {} as FormGroup;
  produtos: Produtos = {} as Produtos;
  key: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private produtosDataService: ProdutosDataService,
    private produtosService: ProdutosService,
    private location: Location,
    ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({

      idProduto: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      valorUnitario: ['', [Validators.required]]

    });
  }

  onSubmit(){


    if(this.key){

    }else{

      // Tratando o objeto, criando uma copia do valor.
      let valueSubmit = Object.assign({}, this.formulario.value)

      this.produtosService.insert(valueSubmit);
    }

    this.produtos = new Produtos();

  }

  onCancel(){

    this.location.back();

  }

}
