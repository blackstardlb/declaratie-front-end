import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotAuthenticatedGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticationService.user.pipe(map(user => {
      if (user == null) {
        return true;
      }
      return this.router.parseUrl('/home');
    }));
  }
}
