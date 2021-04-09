import { ClienteDataService } from './../../shared/service/cliente-data.service';
import { ClienteService } from './../../shared/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { BaseValidFormComponent } from 'src/app/shared/component/base-valid-form/base-valid-form.component';
import { Cliente } from 'src/app/shared/entidades/classes/clienteData';
import { IEstado } from 'src/app/shared/entidades/interface/IEstado';
import { ICidade } from 'src/app/shared/entidades/interface/ICidade';
import { DropdownService } from 'src/app/shared/service/dropdown.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent extends BaseValidFormComponent implements OnInit {

  //dropdown
  estados: IEstado[] = [];
  cidades: ICidade[] = [];

  //dados
  cliente: Cliente = {} as Cliente;
  key: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private clienteDataService: ClienteDataService,
    private dropdownService: DropdownService,
    private location: Location
  )
  {super() }

  ngOnInit(): void {

    //Carregando o estado
    this.dropdownService.getEstados()
    .subscribe((dados: IEstado[]) =>{ this.estados = dados;});

    //Criando formulario
    this.formulario = this.formBuilder.group({

      idCliente: [''],
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', [Validators.required]],

      endereco: this.formBuilder.group({
        cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        numero: ['', Validators.required],
        complemento: [''],
        rua: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      }),
    });

     //Limpando
     this.cliente = new Cliente();

     //Recebendo valores novos ou limpo
     this.clienteDataService.currentCliente.subscribe(data => {
       if(data.cliente && data.key){
         this.formulario.patchValue({
           idCliente : data.cliente.idCliente,
           nome: data.cliente.nome,
           cpf: data.cliente.cpf,
           email: data.cliente.email,
           dataNascimento: data.cliente.dataNascimento,
           endereco: {
             rua: data.cliente.endereco.rua,
             numero: data.cliente.endereco.numero,
             complemento: data.cliente.endereco.complemento,
             cep: data.cliente.endereco.cep,
             bairro: data.cliente.endereco.bairro,
             estado: data.cliente.endereco.estado,
             cidade: data.cliente.endereco.cidade
           }
         });
         this.key = data.key;
       }
     });

    //Carregando a cidade
    // valueChanges: propriedade que ativa quando o valor do campo muda!
    // Emite um evento quando o valor do campo muda!
    //* Pega o valor que foi selecionado do estado, depois *//
    this.formulario.get('endereco.estado')?.valueChanges
        .pipe(
          map(estado => this.estados.filter(e => e.sigla === estado)),
          map(estados => estados && estados.length > 0 ? estados[0].id : 0),
          switchMap((estadoId : number) => this.dropdownService.getCidades(estadoId)),
          tap(console.log)
        )
        .subscribe(cidade => this.cidades = cidade);
  }




  //Enviando os dados para o banco
  onSubmit(){

    console.log(this.formulario.value)

    if(this.formulario.valid){

      if(this.key){
        //Convertendo para objeto
        let valueSubmit: Cliente = Object.assign({}, this.formulario.value);
        // Atualiza os dados
        this.clienteService.update(valueSubmit, valueSubmit.idCliente);
        //Volta para pagina anterior
        this.location.back();
      }else{
        // Tratando o objeto, criando uma copia do valor.
        let valueSubmit = Object.assign({}, this.formulario.value)
        // Adiciona no banco
        this.clienteService.insert(valueSubmit);
        //Volta para pagina anterior
        this.location.back();
      }
      // Limpa o ultimo produto
      this.cliente = new Cliente();

    }
    else
    {
      console.log('form invalido ')
      this.verificaValidacoesForm(this.formulario);
    }

  }

  //Volta para a pagina anterior
  onCancel(){
    // Limpa o ultimo produto
    this.cliente = new Cliente();
    this.formulario.patchValue({
      idCliente :'',
      nome: '',
      cpf:'',
      email:'',
      dataNascimento:'',
      endereco: {
        complemento: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: ''
      }

    });
    this.key = '';
    this.cliente = new Cliente();
    this.location.back();
  }

}
