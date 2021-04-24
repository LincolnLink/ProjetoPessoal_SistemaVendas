
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription, Observable, EMPTY } from 'rxjs';
import { Cliente } from 'src/app/shared/entidades/classes/clienteData';
import { AlertModalService } from 'src/app/shared/service/alert-modal.service';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { ClienteDataService } from './../../shared/service/cliente-data.service';


@Component({
  selector: 'cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements AfterViewInit, OnInit {

  //Lista de produtos
  Cliente!: Observable<Cliente[]>;

  //Modal de confirmação do ngx-bootstrap
  deleteModalRef!: BsModalRef;

  constructor(
    private contatoDataService: ClienteDataService,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertModalService,
  ) { }

  ngOnInit(): void {
  }

  //Depois que carrega o DOM carrega os dados
  ngAfterViewInit() {

    this.Cliente = this.clienteService.getAll2();
    // .subscribe((i: any) =>{ = i;});
  }


  // Deleta o item
  excluir(key: string){

    // Modal de confirmação generica, podendo usar em qualquer component!
    // Coloca o retorno em uma costante!
    const result$ = this.alertService.showConfirm("Confirma para excluir", "Tem certeza que deseja deletar esse cliente?");

    let valurResult: boolean = false;
    // Poderia ter feito no método do serviço!
    // "empty()" não se usa mais, é o EMPTY!
    const result = result$.asObservable()
    .subscribe(
      (success) => {
        valurResult = success;

        if(valurResult)
        {
          valurResult ?  this.clienteService.delete(key): EMPTY
          this.alertService.showAlertSuccess("Deletado com sucesso");
          this.deleteModalRef.hide();
        }
      }
    )

  }

  //informa os dados que vão ser editados
  edit(produto: Cliente, key: string){

    // Com o router você nevega para a pagina de edição!
    this.contatoDataService.changeContato(produto, key);
    this.router.navigate(['editar'], {relativeTo: this.route});
  }

  //Preparando forma para novos dados
  novo(cliente: Cliente = {} as Cliente, key: string = ''){

    // Com o router você nevega para a pagina de edição!
    this.contatoDataService.changeContato(cliente, key);
    this.router.navigate(['novo'], {relativeTo: this.route});
  }

}
