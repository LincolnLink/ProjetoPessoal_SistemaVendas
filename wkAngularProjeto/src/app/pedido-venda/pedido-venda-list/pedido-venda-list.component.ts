import { map, catchError } from 'rxjs/operators';
import { PedidoDataService } from './../../shared/service/pedido-data.service';
import { Pedido } from './../../shared/entidades/classes/pedidoVendaData';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subscription, Subscriber, forkJoin, EMPTY } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoVendaService } from 'src/app/shared/service/pedido-venda.service';
import { pluck } from 'rxjs/operators';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalService } from 'src/app/shared/service/alert-modal.service';

@Component({
  selector: 'pedido-venda-list',
  templateUrl: './pedido-venda-list.component.html',

})
export class PedidoVendaListComponent implements OnInit, AfterViewInit {


    Pedido$!: Observable<Pedido[]>;

    //Modal de confirmação do ngx-bootstrap
    deleteModalRef!: BsModalRef;

    constructor(
    private pedidoDataServico: PedidoDataService,
    private pedidoService: PedidoVendaService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertModalService,) { }

    ngOnInit(): void {
    }

    //Depois que carrega o DOM carrega os dados
    ngAfterViewInit() {

      this.Pedido$ = this.pedidoService.getAll2();
      // .subscribe((i: any) =>{ = i;});
    }

    // Deleta o item
    excluir(key: string){

      // Modal de confirmação generica, podendo usar em qualquer component!
      // Coloca o retorno em uma costante!
      const result$ = this.alertService.showConfirm("Confirma para excluir", "Tem certeza que deseja deletar esse Pedido?");

      let valurResult: boolean = false;
      // Poderia ter feito no método do serviço!
      // "empty()" não se usa mais, é o EMPTY!
      const result = result$.asObservable()
      .subscribe(
        (success) => {
          valurResult = success;

          if(valurResult)
          {
            valurResult ?  this.pedidoService.delete(key): EMPTY
            this.alertService.showAlertSuccess("Deletado com sucesso");
            this.deleteModalRef.hide();
          }
        }
      )
    }

    //Preparando forma para novos dados
    novo(pedido: Pedido = {} as Pedido, key: string = ''){

      // Com o router você nevega para a pagina de edição!
      this.pedidoDataServico.changeContato(pedido, key);
      this.router.navigate(['novo'], {relativeTo: this.route});
    }





}
