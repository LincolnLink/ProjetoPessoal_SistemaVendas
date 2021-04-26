import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { BaseValidFormComponent } from 'src/app/shared/component/base-valid-form/base-valid-form.component';
import { Cliente } from 'src/app/shared/entidades/classes/clienteData';
import { ICarrinhoItens, Pedido } from 'src/app/shared/entidades/classes/pedidoVendaData';
import { CarrinhoService } from 'src/app/shared/service/carrinho.service';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { PedidoVendaService } from 'src/app/shared/service/pedido-venda.service';
import { IformCanDeactivade } from 'src/app/shared/entidades/interface/IformCanDeactivade';


@Component({
  selector: 'carrinho',
  templateUrl: './carrinho.component.html'

})
export class CarrinhoComponent extends BaseValidFormComponent implements OnInit {


   //Lista de cliente
   Cliente!: Observable<Cliente[]>;

   //Lista de produtos
   myOrderItems$!: Observable<ICarrinhoItens[]>;

   // pedido: Pedido = {} as Pedido;
   pedido: Pedido = {'cliente':'','dataHora':'','idVenda':'','totalVenda':0, 'listItens': []};

  //  private formMudou: boolean = false;

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

    // this.formulario.valueChanges
    // .subscribe(i => {
    //   if(i){
    //     this.formMudou = true;
    //   }
    // })
  }


  Remover(item: ICarrinhoItens){
    this.cartService.removeItem(item);
    this.myOrderItems$ = this.cartService.getItems();
  }


  limpar(){
    this.cartService.limparCarrinho();
    this.myOrderItems$ = this.cartService.getItems();
  }


  onSubmit(){

    // this.formMudou = false;


    if(this.formulario.valid){


      // Nome do cliente
      this.pedido.cliente = this.formulario.get('cliente')?.value;

      // Lista de produtos
      this.myOrderItems$.subscribe(i =>  i.forEach(j => this.pedido.listItens.push(j)));

      // Data e hora
      var d = new Date();
      this.pedido.dataHora = d.toLocaleString();

      // Total da venda
      this.myOrderItems$.subscribe(i =>

          i.forEach(j => this.pedido.totalVenda = this.pedido.totalVenda + (j.valorProduto * j.quantidade))
      );


      //console.log("teste valor: ", this.pedido);
      // Adiciona no banco
      this.pedidoService.insert(this.pedido);

      //Volta para pagina anterior
      this.location.back();

      // Limpa o ultimo produto
      // this.pedido = new Pedido();

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


  // Logica informa para o usuario que o campo está preenchido e não foi salvo!
  // Pergunta se ele deseja sair ou não!
  podeMudarDeRota(){

    // if(this.formMudou) {
    //   return confirm("Tem certeza que deseja mudar de pagina, valores não foram salvo?");
    // }
    // else
    // {
    //   return true;
    // }
  }

  // podeDesativar() {
  //   return this.podeMudarDeRota();
  // }

}
