
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { Auth, Hub } from 'aws-amplify';

import { ICredentials } from '@aws-amplify/core';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { CognitoUser } from 'amazon-cognito-identity-js';

import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public static GOOGLE = CognitoHostedUIIdentityProvider.Google;
  public static FACEBOOK = CognitoHostedUIIdentityProvider.Facebook;

  private _authState: Subject<CognitoUser|any> = new Subject<CognitoUser|any>();
  authState: Observable<CognitoUser|any> = this._authState.asObservable();


  public userAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private zone: NgZone){

      Hub.listen('auth', (data) => {
          const { channel, payload } = data;
          if (channel === 'auth') {
            this._authState.next(payload.event);

            switch (payload.event) {
              case 'signIn':
                this.userAuthenticated.next(true);
                  this.zone.run(() => this.router.navigate(['/home']));
                  break;
              case 'signUp':
                  break;
              case 'signOut':
                  this.userAuthenticated.next(false);
                  this.router.navigate(['/login']);
                  break;
              case 'signIn_failure':
              case 'cognitoHostedUI_failure':
                  console.log('Sign in failure', data);
                  break;
            }
          }
        });

  }

  get isAuthenticated() {
    return this.userAuthenticated.asObservable();
}

  async awsCognitoSignIn(username: string, password: string) {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
        return;
    }
    this.userAuthenticated.next(true);

    this.zone.run(() => this.router.navigate(['/home']));
  }

  socialSignIn(provider: CognitoHostedUIIdentityProvider): Promise<ICredentials> {
    try {
        return Auth.federatedSignIn({
            'provider': provider
          });
    } catch (error) {
        console.log('error signing in: ', error);
    }
  }

  async signOut() {
    try {
        await Auth.signOut({ global: true })
        .then(() => { 
            this.userAuthenticated.next(false);
            this.router.navigate(['/login']);
        });
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

}
