import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { BaseValidFormComponent } from 'src/app/shared/component/base-valid-form/base-valid-form.component';
import { Cliente } from 'src/app/shared/entidades/classes/clienteData';
import { itensCarrinho, Pedido } from 'src/app/shared/entidades/classes/pedidoVendaData';
import { CarrinhoService } from 'src/app/shared/service/carrinho.service';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { PedidoVendaService } from 'src/app/shared/service/pedido-venda.service';


@Component({
  selector: 'carrinho',
  templateUrl: './carrinho.component.html'

})
export class CarrinhoComponent extends BaseValidFormComponent implements OnInit {


   //Lista de cliente
   Cliente!: Observable<Cliente[]>;

   //Lista de produtos
   myOrderItems$!: Observable<itensCarrinho[]>;

   //Pedido
   pedido: Pedido = {} as Pedido;

  constructor(
    private cartService: CarrinhoService,
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private location: Location,
    private pedidoService: PedidoVendaService
  ) { super() }

  ngOnInit() {
    this.myOrderItems$ = this.cartService.getItems();
    this.Cliente = this.clienteService.getAll2()

     //Criando formulario
     this.formulario = this.formBuilder.group({
      cliente: ['', [Validators.required]],
    });
  }


  Remover(item: itensCarrinho){
    this.cartService.removeItem(item);
    this.myOrderItems$ = this.cartService.getItems();
  }


  limpar(){
    this.cartService.limparCarrinho();
    this.myOrderItems$ = this.cartService.getItems();
  }


  onSubmit(){

    console.log(this.formulario.value)

    if(this.formulario.valid){

      this.pedido = new Pedido();

      // Nome do cliente
      this.pedido.cliente = this.formulario.get('cliente')?.value;

      // Lista de produtos
      this.myOrderItems$.subscribe(i =>  i.forEach(j => this.pedido.listProdutos.push(j)));

      // Data e hora
      var d = new Date();
      this.pedido.dataHora = d.toLocaleString();

      // Total da venda
      this.myOrderItems$.subscribe(i =>

          i.forEach(j => this.pedido.totalVenda = this.pedido.totalVenda + (j.product.valorUnitario * j.quantidade))
      );


      //console.log("teste valor: ", this.pedido);
      // Adiciona no banco
      this.pedidoService.insert(this.pedido);

      //Volta para pagina anterior
      this.location.back();

      // Limpa o ultimo produto
      this.pedido = new Pedido();

    }
    else
    {
      console.log('form invalido ')
      this.verificaValidacoesForm(this.formulario);
    }
  }


  onCancel(){
    this.location.back();
  }

}
