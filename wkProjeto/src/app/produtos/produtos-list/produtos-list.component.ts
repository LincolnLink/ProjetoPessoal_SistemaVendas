import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Produtos } from 'src/app/shared/Entidades/classes/produtosData';
import { ProdutosDataService } from 'src/app/shared/service/produtos-data.service';
import { ProdutosService } from 'src/app/shared/service/produtos.service';

@Component({
  selector: 'produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent implements OnInit {

  // Propriedade que recebe a lista de produtos
  listProdutos$: Observable<any> = new Observable<any>();

  constructor(
    private contatoDataService: ProdutosDataService,
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    //Alimenta com os valores a lista de produtos
    this.listProdutos$ = this.produtosService.getAll();
    /*this.produtosService.getAll();*/

  }

  // Deleta o item
  excluir(key: string){
    this.produtosService.delete(key);
  }

  //informa os dados que vão ser editados
  edit(produto: Produtos, key: string){

    this.contatoDataService.changeContato(produto, key);
    this.router.navigate(['editar'], {relativeTo: this.route});

    // Com o router você nevega para a pagina de edição!
    //  this.router.navigate(['editar', key], {relativeTo: this.route});
  }


}
