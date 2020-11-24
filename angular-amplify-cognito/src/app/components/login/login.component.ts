import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {


  fbLogo = '../../../../../assets/images/fb-logo.png';
  googleLogo = '../../../../../assets/images/google-logo.png';

  loginForm: FormGroup;
  public loginInvalid: boolean;

  constructor( private fb: FormBuilder, private authService: AuthService ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  async onSubmit() {}

  handleLogin = (action: string = null): void => {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    try {

      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

      this.authService.awsCognitoSignIn(username, password);

    } catch (err) {

      this.loginInvalid = true;

    }

  }

  async signInWithGoogle() {
    await this.authService.socialSignIn(AuthService.GOOGLE);
  }

  async signInWithFacebook() {
    await this.authService.socialSignIn(AuthService.FACEBOOK);
  }

}