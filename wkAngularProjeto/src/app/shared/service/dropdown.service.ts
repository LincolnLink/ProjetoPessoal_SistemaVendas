import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ICidade } from '../entidades/interface/ICidade';
import { IEstado } from '../entidades/interface/IEstado';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }


  getEstados(){

    return this.http.get<IEstado[]>('assets/dados/estadosbr.json');
    //.pipe(map((res: Response) => res.json()));

  }

  getCidades(idEstado: number){

    return this.http.get<ICidade[]>('assets/dados/cidades.json')
    .pipe(
      map((cidades: ICidade[])=> cidades.filter(c => c.estado == idEstado))
    );
  }
}
