import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tom\'s Hardware Store';

  constructor(private _auth: AuthService) {
  }

  logout() {
    this._auth.doLogout();
  }
}
