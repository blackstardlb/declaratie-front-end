import {Component} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'declaratie-front-end';

  isUserAuthenticated: Observable<boolean>;
  role: Observable<string>;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.isUserAuthenticated = this.authService.isUserAuthenticated();
    this.role = this.authService.user.pipe(map(user => {
      if (!user) {
        return '';
      }
      return user.role.toString();
    }));
  }

  public logout() {
    this.authService.signOut().subscribe(_ => this.router.navigateByUrl('/login'));
  }

  getRole() {
  }
}
