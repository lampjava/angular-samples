import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppConstants } from '../../../shared/constants';
import { AppServices } from '../../../shared/services';
import { User } from '../../../shared/models';

declare const $: any;

@Component({
  selector: 'app-main-login',
  templateUrl: './login.component.html',
  styles: [ './login.component.css' ],
  providers: [ AppServices ]
})
export class LoginComponent implements OnInit {

  pageTitle: any = 'Login';
  nextPage: string = '/contents';
  user: object = new User();
  loginForm: FormGroup;

  constructor(public router: Router, private appServices: AppServices, private fb: FormBuilder) {
    this.appServices.setTitle(this.pageTitle);
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log(this.user.toString());
    localStorage.setItem(AppConstants.appAuthKey, 'true');
    this.router.navigate([this.nextPage]);
  }

}
