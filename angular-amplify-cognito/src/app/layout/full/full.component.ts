import { Router } from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';

import { AuthService } from '../../service/authentication.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: []
})
export class FullComponent implements OnInit {
  title = 'amplify-angular';
  isAuthenticated: boolean;

  constructor(public router: Router , public authService: AuthService) {

    this.authService.isAuthenticated.subscribe(

      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated

    );

  }

  async ngOnInit() {

    //this.isAuthenticated = await this.authService.checkAuthenticated();

  }

}
