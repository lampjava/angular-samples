import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../../shared/constants';

@Component({
    selector: 'app-main-login',
    templateUrl: './login.component.html',
    styles: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

    constructor(public router: Router) {
    }

    ngOnInit() {
    }

    onLogin() {
      localStorage.setItem(AppConstants.appAuthKey, 'true');
      this.router.navigate(['/contents']);
    }

}
