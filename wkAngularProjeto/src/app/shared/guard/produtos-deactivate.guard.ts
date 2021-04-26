import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { IformCanDeactivade } from '../entidades/interface/IformCanDeactivade';

// Cria uma interface para poder tipar o CanDeactivate, e tornar ele generico!
// Assim todos os componentes pode ter a opção de cancelar a rota, implementa o método da interface
// com a logica que decide, se vai ser desativado ou não a rota!
@Injectable({
  providedIn: 'root'
})
export class ProdutosDeactivateGuard implements CanDeactivate<IformCanDeactivade>  {
  canDeactivate(
    component: IformCanDeactivade,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean>
  {

    console.log("Entrou na configuração de desativar a rota [x]");
     // Logica para definir se vai mudar ou não de rota!
     //return component.podeMudarDeRota();

     return component.podeDesativar();

  }


}
