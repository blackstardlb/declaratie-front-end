import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private form: FormBuilder, private router: Router, private authService: AuthenticationService) {
    this.loginForm = this.form.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    this.authService.user.subscribe(user => {
      if (user != null) {
        this.router.navigateByUrl('home');
      }
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.loginForm.valid) {
      const value = this.loginForm.value;
      this.authService.signIn(value.username, value.password);
    }
  }

}
