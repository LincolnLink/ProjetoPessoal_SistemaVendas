export class Produtos{


  private _idProduto : string = '';

  public get idProduto() : string {
    return this._idProduto;
  }

  public set idProduto(v : string) {
    this._idProduto = v;
  }

  private _nome : string = '';

  public get nome() : string {
    return this._nome;
  }

  public set nome(v : string) {
    this._nome = v;
  }

  private _valorUnitario : number = 0;

  public get valorUnitario() : number {
    return this._valorUnitario;
  }

  public set valorUnitario(v : number) {
    this._valorUnitario = v;
  }








}
