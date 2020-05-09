import {Component, Input} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: any;
  public authenticated = false;
  public isWaiting = false;

  constructor(private a: AngularFireAuth, public afAuth: AuthService) {
    this.a.authState
      .subscribe((authentic) => {
        if (authentic != null) {
          this.user = authentic;
          this.authenticated = true;
          window.localStorage.setItem('user', JSON.stringify(this.user));
        }
      });
  }

  login() {
    this.authenticated = true;
    this.isWaiting = true;
    this.afAuth.loginInWithGoogle().then(() => {
      this.isWaiting = false;
    }).catch( () => {
      this.authenticated = false;
    });
  }

  logOut() {
    this.afAuth.logout();
    this.authenticated = false;
  }


}
