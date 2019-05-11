import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  loginForm: FormGroup;

  // TODO: AuthService
  constructor(private form: FormBuilder, private router: Router) {
    this.loginForm = this.form.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.loginForm.valid) {
      alert(this.loginForm.value.username);
      // this.loginForm.reset();
    }

    // TODO
    // this.router.navigateByUrl('overview');
  }

}
