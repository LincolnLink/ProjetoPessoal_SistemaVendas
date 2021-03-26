import { HttpClient } from '@angular/common/http';
import { catchError, take, tap } from 'rxjs/operators';
import { Inject } from '@angular/core';


export class CrudSimplesService<T> {

  constructor(
    protected http: HttpClient,
    @Inject(String) private API_URL: string
  ) { }

  getAllSimples(){
    return this.http.get<T[]>(this.API_URL)
    .pipe(
      catchError(error => {
        console.error(error);
        return [];
      }),
      take(1)
    );

  }
}
