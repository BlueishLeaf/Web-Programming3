import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: string;
  password: string;
  constructor(private _fb: FormBuilder, private _auth: AuthService) { }

  // Using Angular reactive forms
  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.loginForm.valueChanges.subscribe(data => {
      this.email = data.email;
      this.password = data.password;
    });
  }

  login() {
    this._auth.doLogin(this.email, this.password);
  }

  facebookLogin() {
    this._auth.doFacebookLogin();
  }

  googleLogin() {
    this._auth.doGoogleLogin();
  }

}
