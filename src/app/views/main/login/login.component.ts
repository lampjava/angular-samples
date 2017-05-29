import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../../shared/constants';
import { AppServices } from '../../../shared/services';

@Component({
  selector: 'app-main-login',
  templateUrl: './login.component.html',
  styles: [ './login.component.css' ],
  providers: [ AppServices ]
})
export class LoginComponent implements OnInit {

  pageTitle = 'Login';

  constructor(public router: Router, private appServices: AppServices) {
    this.appServices.setTitle(this.pageTitle);
  }

  ngOnInit() {
  }

  onLogin() {
    localStorage.setItem(AppConstants.appAuthKey, 'true');
    this.router.navigate(['/contents']);
  }

}
