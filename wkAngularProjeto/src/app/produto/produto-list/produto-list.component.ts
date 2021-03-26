
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
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
export class ProdutoListComponent implements AfterViewInit, OnInit {

  // Propriedade que recebe a lista de produtos
  listProdutos$: Observable<any> = new Observable<any>();

  //tabela
  displayedColumns: string[] = ['CI do produto', 'Nome', 'Valor Unitario', 'actions'];

  Produtos: Produto[] = []
  dataSource = new MatTableDataSource<Produto>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private contatoDataService: ProdutoDataService,
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

     //Alimenta com os valores a lista de produtos
     //this.listProdutos$ = this.produtoService.getAll();



  }

  ngAfterViewInit() {

    let x = this.produtoService.getAll2()
    .subscribe(i =>{
      this.Produtos =i
      this.dataSource = new MatTableDataSource<Produto>(this.Produtos);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    }
   );




  }

   // Deleta o item
  excluir(key: string){
    this.produtoService.delete(key);

    this.dataSource = new MatTableDataSource<Produto>(this.Produtos);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  //informa os dados que vão ser editados
  edit(produto: Produto, key: string){

    // Com o router você nevega para a pagina de edição!
    this.contatoDataService.changeContato(produto, key);
    this.router.navigate(['editar'], {relativeTo: this.route});


  }

  //informa os dados que vão ser editados
  novo(produto: Produto = {} as Produto, key: string = ''){

    // Com o router você nevega para a pagina de edição!
    this.contatoDataService.changeContato(produto, key);
    this.router.navigate(['novo'], {relativeTo: this.route});

  }


}
