import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
//Serviços e classes
import { Produtos } from '../../shared/Entidades/classes/produtosData';
import { ProdutosService } from './../../shared/service/produtos.service';
import { ProdutosDataService } from './../../shared/service/produtos-data.service';
import { ActivatedRoute } from '@angular/router';


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
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({

      idProduto: [null, [Validators.required]],
      nome: ['', [Validators.required]],
      valorUnitario: [[''], [Validators.required]]
    });

    this.produtos = new Produtos();

    this.produtosDataService.currentPordutos.subscribe(data => {

      if(data.produtos && data.key){
        // this.produtos.idProduto = data.produtos.idProduto;
        // this.produtos.nome = data.produtos.nome;
        // this.produtos.valorUnitario = data.produtos.valorUnitario;

        this.formulario.patchValue({
          idProduto : data.produtos.idProduto,
          nome: data.produtos.nome,
          valorUnitario: data.produtos.valorUnitario
        });
        this.key = data.key;
      }
    });

    //const produtoUrl: Produtos = this.route.snapshot.data['produtoDaUrl'];


  }

  onSubmit(){

    if(this.key){

      let valueSubmit: Produtos = Object.assign({}, this.formulario.value)

      // Atualiza os dados
      this.produtosService.update(valueSubmit, valueSubmit.idProduto);

      //Volta para pagina anterior
      this.location.back();
    }else{

      // Tratando o objeto, criando uma copia do valor.
      let valueSubmit = Object.assign({}, this.formulario.value)
      // Adiciona no banco
      this.produtosService.insert(valueSubmit);

      //Volta para pagina anterior
      this.location.back();
    }

    // Limpa o ultimo produto
    this.produtos = new Produtos();
  }

  // Volta para a pagina anterior
  onCancel(){
    this.location.back();
  }

}
