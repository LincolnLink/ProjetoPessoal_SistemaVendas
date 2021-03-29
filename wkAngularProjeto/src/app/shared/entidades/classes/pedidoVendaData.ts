import { Cliente } from 'src/app/shared/entidades/classes/clienteData';
import { Produto } from "./produtoData";

export class Pedido{


  //Código de identificação do produto
  private _idVenda : string = '';

  public get idVenda() : string {
    return this._idVenda;
  }

  public set idVenda(v : string) {
    this._idVenda = v;
  }

  private _dataHora : string = '';

  public get dataHora() : string {
    return this._dataHora;
  }

  public set dataHora(v : string) {
    this._dataHora = v;
  }

  private _cliente : string = '';

  public get cliente() : string {
    return this._cliente;
  }

  public set cliente(v : string) {
    this._cliente = v;
  }

  private _listProdutos : itensCarrinho[] = [];

  public get listProdutos() : itensCarrinho[] {
    return this._listProdutos;
  }

  public set listProdutos(v : itensCarrinho[]) {
    this._listProdutos = v;
  }

  private _totalVenda : number = 0;

  public get totalVenda() : number {
    return this._totalVenda;
  }

  public set totalVenda(v : number) {
    this._totalVenda = v;
  }

}


export interface itensCarrinho {
  product: Produto;
  quantidade: number;
}


