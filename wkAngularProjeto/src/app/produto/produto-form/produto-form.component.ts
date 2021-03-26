import { Component, OnInit } from '@angular/core';
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
export class ProdutoFormComponent implements OnInit {

  formulario: FormGroup = {} as FormGroup;

  produtos: Produto = {} as Produto;
  key: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private produtoDataService: ProdutoDataService,
    private produtoService: ProdutoService,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({

      idProduto: [null, [Validators.required]],
      nome: ['', [Validators.required]],
      valorUnitario: [[''], [Validators.required]]
    });

    this.produtos = new Produto();

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
  }


  onSubmit(){

    if(this.key){

      let valueSubmit: Produto = Object.assign({}, this.formulario.value)

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

  // Volta para a pagina anterior
  onCancel(){
    this.location.back();
  }

}
