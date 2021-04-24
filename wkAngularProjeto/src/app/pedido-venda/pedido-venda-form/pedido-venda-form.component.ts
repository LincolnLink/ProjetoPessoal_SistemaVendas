import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BaseValidFormComponent } from 'src/app/shared/component/base-valid-form/base-valid-form.component';
import { Produto } from 'src/app/shared/entidades/classes/produtoData';
import { FormBuilder, Validators } from '@angular/forms';
import { Cliente } from './../../shared/entidades/classes/clienteData';
import { ProdutoService } from 'src/app/shared/service/produto.service';
import { CarrinhoService } from 'src/app/shared/service/carrinho.service';
import { Pedido, ICarrinhoItens } from 'src/app/shared/entidades/classes/pedidoVendaData';
import { Observable } from 'rxjs';

@Component({
  selector: 'pedido-venda-form',
  templateUrl: './pedido-venda-form.component.html'

})
export class PedidoVendaFormComponent implements OnInit {

  // Modelo de pedido
  pedido: Pedido = {} as Pedido;

  // Modelo de itens do carrinho
  listItens: ICarrinhoItens = {} as ICarrinhoItens

  key: string = '';

  //Produtos escolhidos
  ListProdutos: Produto[] = [];

  //Cliente escolhido
  clienteSelecionado: Cliente = {} as Cliente;

  //Lista de produtos
  //Produtos: Produto[] = [];
  Produtos!: Observable<Produto[]>;


  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {

    //Carrega Produto
    this.Produtos = this.produtoService.getAll2()
    //.subscribe(i =>{ this.Produtos =i});

  }




  //Enviando os dados para o banco
  onSubmit(){
  /*
    console.log(this.formulario.value)

    if(this.formulario.valid){

      if(this.key){
        //Convertendo para objeto
        let valueSubmit: Pedido = Object.assign({}, this.formulario.value);
        // Atualiza os dados
        this.pedidoService.update(valueSubmit, valueSubmit.idVenda);
        //Volta para pagina anterior
        this.location.back();
      }else{
        // Tratando o objeto, criando uma copia do valor.
        let valueSubmit = Object.assign({}, this.formulario.value)
        // Adiciona no banco
        this.pedidoService.insert(valueSubmit);
        //Volta para pagina anterior
        this.location.back();
      }
      // Limpa o ultimo produto
      this.pedido = new Pedido();

    }
    else
    {
      console.log('form invalido ')
      this.verificaValidacoesForm(this.formulario);
    }
  */
  }

  //Volta para a pagina anterior
  onCancel(){
    // Limpa o ultimo produto
    // this.pedido = new Pedido();
    this.location.back();
  }

  addProduto(pro: Produto ){

    // Pega produto
    // let product: itensCarrinho = {} as itensCarrinho;
    this.listItens = {} as ICarrinhoItens

    this.listItens.nomeProduto = pro.nome;
    this.listItens.valorProduto = pro.valorUnitario;
    this.listItens.idProduto = pro.idProduto;
    this.listItens.quantidade = 1;

    //Envia para o banco
    this.carrinhoService.addItem(this.listItens)
  }

}
