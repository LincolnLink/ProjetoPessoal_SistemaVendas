import { BaseValidFormComponent } from './../../shared/component/base-valid-form/base-valid-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Produto } from 'src/app/shared/entidades/classes/produtoData';
import { ProdutoDataService } from 'src/app/shared/service/produto-data.service';
import { ProdutoService } from 'src/app/shared/service/produto.service';

@Component({
  selector: 'produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent extends BaseValidFormComponent implements OnInit {


  produtos: Produto = {} as Produto;
  key: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private produtoDataService: ProdutoDataService,
    private produtoService: ProdutoService,
    private location: Location
  ) {super();}

  ngOnInit(): void {

    //Criando o form
    this.formulario = this.formBuilder.group({
      idProduto: [null],
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      valorUnitario: ['', [Validators.required, Validators.maxLength(7)]]
    });

    //Limpando
    this.produtos = new Produto();

    //Recebendo valores novos ou limpo
    this.produtoDataService.currentPordutos.subscribe(data => {
      if(data.produtos && data.key){
        this.formulario.patchValue({
          idProduto : data.produtos.idProduto,
          nome: data.produtos.nome,
          valorUnitario: data.produtos.valorUnitario
        });
        this.key = data.key;
      }
    });

    this.formulario.get('nome')?.valueChanges
    .subscribe(i => {

      console.log('valor teste: ', i);
    })


  }


  //Enviando os dados para o banco
  onSubmit(){


    if(this.formulario.valid){

      if(this.key){
        //Convertendo para objeto
        let valueSubmit: Produto = Object.assign({}, this.formulario.value);
        // Atualiza os dados
        this.produtoService.update(valueSubmit, valueSubmit.idProduto);
        //Volta para pagina anterior
        this.location.back();
      }else{
        // Tratando o objeto, criando uma copia do valor.
        let valueSubmit = Object.assign({}, this.formulario.value)
        // Adiciona no banco
        this.produtoService.insert(valueSubmit);
        //Volta para pagina anterior
        this.location.back();
      }
      // Limpa o ultimo produto
      this.produtos = new Produto();

    }
    else
    {
      console.log('form invalido ')
      this.verificaValidacoesForm(this.formulario);
    }

  }

  //Volta para a pagina anterior
  onCancel(){
    // Limpa o ultimo produto
    this.produtos = new Produto();
    this.formulario.patchValue({
      idProduto :'',
      nome: '',
      valorUnitario:''
    });
    this.key = '';
    this.produtos = new Produto();
    this.location.back();
  }

}
