

export class Cliente{

  //Código de identificação do produto
  private _idCliente : string = '';

  public get idCliente() : string {
    return this._idCliente;
  }

  public set idCliente(v : string) {
    this._idCliente = v;
  }

  private _nome : string = '';

  public get nome() : string {
    return this._nome;
  }

  public set nome(v : string) {
    this._nome = v;
  }

  private _cpf : number = 0;

  public get cpf() : number {
    return this._cpf;
  }

  public set cpf(v : number) {
    this._cpf = v;
  }

  private _endereco :IEndereco = {} as IEndereco;

  public get endereco() : IEndereco {
    return this._endereco;
  }

  public set endereco(v : IEndereco) {
    this._endereco = v;
  }

  private _email : string = '';

  public get email() : string {
    return this._email;
  }

  public set email(v : string) {
    this._email = v;
  }

  private _dataNascimento : string = '';

  public get dataNascimento() : string {
    return this._dataNascimento;
  }

  public set dataNascimento(v : string) {
    this._dataNascimento = v;
  }
}



export interface IEndereco{

  cep: string,
  rua: string,
  numero: string,
  bairro: string,
  complemento: string,
  cidade: string,
  estado: string
}
