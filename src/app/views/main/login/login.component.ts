import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppConstants } from '../../../shared/constants';
import { AppServices } from '../../../shared/services';
import { User } from '../../../shared/models';
import {Http} from '@angular/http';
import {HttpInterceptorService} from 'ng-http-interceptor';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

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

  error: any;
  requests: Array<any>;

  text: string;

  constructor(public router: Router, private appServices: AppServices, private http: Http, private httpInterceptor: HttpInterceptorService) {
    this.appServices.setTitle(this.pageTitle);

    httpInterceptor.request().addInterceptor((data, method) => {
      console.log('-------------1---------------');
      console.log(method, data);
      return data;
    });

    httpInterceptor.request('/my-url').addInterceptor(data => {
      console.log('This wong get called');
      return data;
    });

    httpInterceptor.response().addInterceptor((res, method) => {
      console.log('-------------2---------------');
      // console.log(this.text));
      console.log('-------------4---------------');
      return res.do(r => console.log(method, r));
    });
  }

  ngOnInit(): void {
    this.http.get('assets/i18n/cn.json')
      .map(r => this.text = r.text())
      .subscribe();
  }

  onLogin(): void {
    console.log(this.user.toString());
    localStorage.setItem(AppConstants.appAuthKey, 'true');
    this.router.navigate([this.nextPage]);
  }

}
