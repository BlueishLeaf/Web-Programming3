import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Ng6NotifyPopupService } from 'ng6-notify-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;

  constructor(private notify: Ng6NotifyPopupService, private _firebaseAuth: AngularFireAuth, private router: Router, private _zone: NgZone) { }

  // Sign user up with email and password
  signup(email: string, password: string) {
    this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this._isLoggedIn = true;
      this._zone.run(() => {
        this.router.navigate(['/products']);
        this.notify.show('Hello Customer!', { position: 'top', duration: '2500', type: 'success' });
      });
    });
  }

  // Log user in with email and password
  doLogin(email: string, password: string) {
    this._firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
        this._isLoggedIn = true;
        this._zone.run(() => {
          this.router.navigate(['/products']);
          this.notify.show('Hello Customer!', { position: 'top', duration: '2500', type: 'success' });
        });
      });
  }

  // Pass users to social providers to log in
  async doGoogleLogin() {
    await this.oAuth(new firebase.auth.GoogleAuthProvider());
  }

  async doFacebookLogin() {
    await this.oAuth(new firebase.auth.FacebookAuthProvider());
  }

  async oAuth(provider) {
    await this._firebaseAuth.auth.signInWithPopup(provider).then(() => {
      this._isLoggedIn = true;
      this._zone.run(() => {
        this.router.navigate(['/products']);
        this.notify.show('Hello Customer!', { position: 'top', duration: '2500', type: 'success' });
      });
    });
  }

  // Log a user out and re-route them to login page
  doLogout() {
    if (firebase.auth().currentUser) {
      this._firebaseAuth.auth.signOut().then(() => {
        this._isLoggedIn = false;
        this._zone.run(() => {
          this.router.navigate(['/login']);
        });
      });
    }
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}
