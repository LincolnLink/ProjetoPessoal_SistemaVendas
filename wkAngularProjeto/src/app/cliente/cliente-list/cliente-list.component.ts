
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Cliente } from 'src/app/shared/entidades/classes/clienteData';
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


  constructor(
    private contatoDataService: ClienteDataService,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  //Depois que carrega o DOM carrega os dados
  ngAfterViewInit() {

    this.Cliente = this.clienteService.getAll2()
    // .subscribe((i: any) =>{ = i;});
  }


  // Deleta o item
  excluir(key: string){
    this.clienteService.delete(key);
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
