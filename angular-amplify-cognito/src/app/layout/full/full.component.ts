import { Router } from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../service/authentication.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: []
})
export class FullComponent implements OnInit {
  title = 'amplify-angular';
  isAuthenticated: Observable<boolean>;

  constructor(private authService: AuthService) {
  }

  async ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated;
  }

  logout() {
    this.authService.signOut();
  }

}
