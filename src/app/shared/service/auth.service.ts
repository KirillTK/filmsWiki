import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/index";
import {Router} from "@angular/router";


@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user = afAuth.authState;

  }

  // signInWithTwitter() {
  //   return this._firebaseAuth.auth.signInWithPopup(
  //     new firebase.auth.TwitterAuthProvider()
  //   );
  // }
  //
  // signInWithFacebook() {
  //   return this._firebaseAuth.auth.signInWithPopup(
  //     new firebase.auth.FacebookAuthProvider()
  //   );
  // }

  loginInWithGoogle() {
    // return this._firebaseAuth.auth.signInWithPopup(
    //   new firebase.auth.GoogleAuthProvider()
    // );
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
  }

  // isLoggedIn() {
  //   if (this.userDetails == null) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  logout() {
    window.localStorage.removeItem('user');
    this.afAuth.auth.signOut();
  }

}
