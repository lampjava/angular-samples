import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../../../../core/constants';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() { }

    onLoggedin() {
        localStorage.setItem(AppConstants.appAuthKey, 'true');
    }

}
