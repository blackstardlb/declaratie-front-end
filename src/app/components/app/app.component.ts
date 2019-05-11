import {Component} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'declaratie-front-end';

  isUserAuthenticated: Observable<boolean>;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.isUserAuthenticated = this.authService.isUserAuthenticated();
  }

  public logout() {
    this.authService.signOut().subscribe(_ => this.router.navigateByUrl('/login'));
  }
}
