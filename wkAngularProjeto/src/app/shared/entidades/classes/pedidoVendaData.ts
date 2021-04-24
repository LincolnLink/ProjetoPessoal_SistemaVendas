
export interface Pedido{
  idVenda: string,
  dataHora: string,
  cliente: string,
  totalVenda: number,
  listItens: ICarrinhoItens[]
}



export interface ICarrinhoItens{

  nomeProduto: string,
  idProduto: string,
  quantidade: number,
  valorProduto: number,


}


// export class itensCarrinho {


//   private _nomeProduto : string = '';
//   public get nomeProduto() : string {
//     return this._nomeProduto;
//   }
//   public set nomeProduto(v : string) {
//     this._nomeProduto = v;
//   }

//   private _idProduto : string = '';
//   public get idProduto() : string {
//     return this._idProduto;
//   }
//   public set idProduto(v : string) {
//     this._idProduto = v;
//   }

//   private _quantidade : number = 0;
//   public get quantidade() : number {
//     return this._quantidade;
//   }
//   public set quantidade(v : number) {
//     this._quantidade = v;
//   }

//   private _valorProduto : number = 0;
//   public get valorProduto() : number {
//     return this._valorProduto;
//   }
//   public set valorProduto(v : number) {
//     this._valorProduto = v;
//   }

//   // nomeProduto: string;
//   // quantidade: number;
//   // valorProduto: number;
//   // idProduto: string
// }




// export class Pedido{


//   //Código de identificação do produto
//   private _idVenda : string = '';

//   public get idVenda() : string {
//     return this._idVenda;
//   }

//   public set idVenda(v : string) {
//     this._idVenda = v;
//   }

//   private _dataHora : string = '';

//   public get dataHora() : string {
//     return this._dataHora;
//   }

//   public set dataHora(v : string) {
//     this._dataHora = v;
//   }

//   private _cliente : string = '';

//   public get cliente() : string {
//     return this._cliente;
//   }

//   public set cliente(v : string) {
//     this._cliente = v;
//   }

//   // private _listProdutos : itensCarrinho[] = [];

//   // public get listProdutos() : itensCarrinho[] {
//   //   return this._listProdutos;
//   // }

//   // public set listProdutos(v : itensCarrinho[]) {
//   //   this._listProdutos = v;
//   // }

//   private _totalVenda : number = 0;

//   public get totalVenda() : number {
//     return this._totalVenda;
//   }

//   public set totalVenda(v : number) {
//     this._totalVenda = v;
//   }

// }
