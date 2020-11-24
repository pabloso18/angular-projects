import { Component } from '@angular/core';

import { AuthService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amplify-angular';

  constructor(private authService: AuthService) {

  }

}
