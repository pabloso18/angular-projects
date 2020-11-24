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

  async signInWithGoogle() {
   // await this.authenticationService.socialSignIn(AuthenticationService.GOOGLE);
  }

  async signInWithFacebook() {
    //await this.authenticationService.socialSignIn(AuthenticationService.FACEBOOK);
  }

}