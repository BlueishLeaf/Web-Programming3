import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tom\'s Hardware Store';
  isLoggedIn = false;

  constructor(private _auth: AuthService){
    this.isLoggedIn = _auth.isLoggedIn();
  }
}
