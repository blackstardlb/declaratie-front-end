import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {Role} from '../../models/role/role.enum';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitManagerGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private  router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticationService.doesUserHaveRole(Role.UNIT_MANAGER).pipe(map(hasRole => {
      if (hasRole) {
        return true;
      }
      return this.router.parseUrl('/no-permissions');
    }));
  }
}
