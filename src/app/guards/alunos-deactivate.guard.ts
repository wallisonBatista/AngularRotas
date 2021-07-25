import { Injectable, Component } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AlunosFormComponent } from './../alunos/alunos-form/alunos-form.component';

@Injectable({
  providedIn: 'root',
})
export class AlunosDeactivateGuard
  implements CanDeactivate<AlunosFormComponent>
{
  canDeactivate(
    component: AlunosFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('guarda de desativação');

    return component.podeMudarRota();
  }
}
