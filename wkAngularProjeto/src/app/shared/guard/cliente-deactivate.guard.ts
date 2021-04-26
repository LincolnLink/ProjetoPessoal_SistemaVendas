import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { IformCanDeactivade } from '../entidades/interface/IformCanDeactivade';

@Injectable({
  providedIn: 'root'
})
export class ClienteDeactivateGuard implements CanDeactivate<IformCanDeactivade> {
  canDeactivate(
    component: IformCanDeactivade,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean>
  {

     // Logica para definir se vai mudar ou não de rota!
     //return component.podeMudarDeRota();
     return component.podeDesativar();

  }

}
