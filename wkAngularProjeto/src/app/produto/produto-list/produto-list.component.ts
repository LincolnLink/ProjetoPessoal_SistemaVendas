
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscriber, Subscription } from 'rxjs';
import { Produto } from 'src/app/shared/entidades/classes/produtoData';
import { ProdutoDataService } from 'src/app/shared/service/produto-data.service';
import { ProdutoService } from 'src/app/shared/service/produto.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements AfterViewInit, OnInit, OnDestroy {

  //ListaEdestruir
  listDestroy : Subscription = new Subscription();

  //Lista de produtos
  Produtos: Produto[] = []

  //Coluna e valores da tabela
  displayedColumns: string[] = ['CI do produto', 'Nome', 'Valor Unitario', 'actions'];
  dataSource = new MatTableDataSource<Produto>();
  //Paginação
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private contatoDataService: ProdutoDataService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }

  //Depois que carrega o DOM carrega os dados
  ngAfterViewInit() {
    this.listDestroy = this.produtoService.getAll2()
    .subscribe(i =>{
      this.Produtos =i
      this.alimentandoTabela(this.Produtos)
      }
    );
  }

  // Se desinscrevendo
  ngOnDestroy(): void {
    this.listDestroy.unsubscribe();
  }

  //Pegando valores da tabela
  alimentandoTabela(list : Produto[]){
    this.dataSource = new MatTableDataSource<Produto>(list);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

   // Deleta o item
  excluir(key: string){
    this.produtoService.delete(key);
    this.alimentandoTabela(this.Produtos);
  }

  //informa os dados que vão ser editados
  edit(produto: Produto, key: string){

    // Com o router você nevega para a pagina de edição!
    this.contatoDataService.changeContato(produto, key);
    this.router.navigate(['editar'], {relativeTo: this.route});
  }

  //Preparando forma para novos dados
  novo(produto: Produto = {} as Produto, key: string = ''){

    // Com o router você nevega para a pagina de edição!
    this.contatoDataService.changeContato(produto, key);
    this.router.navigate(['novo'], {relativeTo: this.route});
  }


}
