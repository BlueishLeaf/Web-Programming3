import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  email: string;
  password: string;
  passwordRepeat: string;
  constructor(private fb: FormBuilder, private _auth: AuthService) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordRepeat: ['', [Validators.required]]
    });

    this.registerForm.valueChanges.subscribe(data => {
      this.email = data.email;
      this.password = data.password;
      this.passwordRepeat = data.passwordRepeat;
    });
  }

  get formEmail() {
    return this.registerForm.get('email');
  }
  get formPassword() {
    return this.registerForm.get('password');
  }
  get formPasswordRepeat() {
    return this.registerForm.get('passwordRepeat');
  }

  registerUser() {
    if (this.password === this.passwordRepeat) {
      this.formPasswordRepeat.setErrors(null);
      this._auth.signup(this.email, this.password);
    } else {
      this.formPasswordRepeat.setErrors({ incorrect: true });
    }
  }

}
