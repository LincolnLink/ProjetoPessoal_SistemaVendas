

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Produtos } from "src/app/shared/Entidades/classes/produtosData";
import { ProdutosService } from './../../shared/service/produtos.service';
import { Observable } from 'rxjs';
import { filter, map, switchMap, take } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ProdutoResolverGuard implements Resolve<Produtos> {

  produto: Produtos = {} as Produtos;

  listProdutos: Observable<any> = new Observable<Produtos>();

  constructor(
    private produtosService: ProdutosService,
  ){}

    // route: uma fotografia da rota, pode extrair os parametros da rota!
    // state: Nesse cenário não importa!
    resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Produtos {

      /*this.listProdutos = this.produtosService.getAll();*/

      this.listProdutos.pipe(
       map((v: Produtos) =>  ({
        idProduto : v.idProduto,
        nome: v.nome,
        valorUnitario: v.valorUnitario
       } as Produtos)),

      // filter(v: any => v.idProduto == route.params['id'])

     ).subscribe(v =>{
       console.log("resolvido: ", v)
       //this.produto = v
     })

     return this.produto;

     /*
      if(route.params && route.params['id']){

        let idValor = route.params['id']

        this.listProdutos.pipe(
          filter(v => v.idProduto == idValor),
          take(2)
        )
        .subscribe(valor =>{
          this.produto = valor
        });
        console.log("o resolve retornou: ", this.produto)
        return this.produto;
      }
      else
      {
        return this.produto;
      }
*/
      // Situação aonde é criado um curso novo!
      // O operador "of()" do RXJS, serve para retornar
      // um observable apartir de um objeto!




  }

}
