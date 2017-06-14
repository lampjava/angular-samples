import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';

import { AuthConstants } from '../../../shared/constants';
import { AppServices } from '../../../shared/services';
import { StringUtils, StorageUtils, FormValidatorUtils } from '../../../shared/utils';
import { User } from '../../../shared/models';

@Component({
  selector: 'app-main-login',
  templateUrl: './login.component.html',
  styles: [ './login.component.css' ],
  providers: [ AppServices, CookieService ]
})
export class LoginComponent implements OnInit {

  urls: any;
  pageTitle: any = 'Login';
  // user: User = new User({email: 'jinwoo.yuk@bespinglobal.com', additional: { birthday: '19820207'} });
  user: User;

  form: FormGroup;
  formTargets: any;

  @ViewChild('remember') remember: ElementRef;

  constructor(
    public router: Router,
    private appServices: AppServices,
    private fb: FormBuilder,
    private cookieService: CookieService
  ) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

  ngOnInit(): void {
    const rememberEmail: string = this.cookieService.get(AuthConstants.cookieKey);
    let userValues: object = {};
    if (StringUtils.isNotEmpty(rememberEmail)) {
      userValues = {
        'email': rememberEmail
      };
    }
    this.user = new User(userValues);
    this.remember.nativeElement.checked = true;

    this.formTargets = {
      'email': '',
      'password': ''
    };
    this.setFormRuleSet();
  }

  setFormRuleSet(): void {
    this.form = this.fb.group({
      'email': FormValidatorUtils.emailRuleSet(this.user.email),
      'password': FormValidatorUtils.passwordRuleSet(this.user.password)
    });
    this.form.valueChanges.subscribe(
      data => this.formTargets = FormValidatorUtils.watchValueChanged(this.form, this.formTargets, data)
    );
    this.formTargets = FormValidatorUtils.watchValueChanged(this.form, this.formTargets);
  }

  onLogin(): void {
    const authValues: Array<any> = [
      { key: AuthConstants.authorEmail, value: this.user.email },
      { key: AuthConstants.authKey, value: AuthConstants.authValue }
    ];
    StorageUtils.setItems(authValues);

    if (this.remember.nativeElement.checked) {
      this.cookieService.put(AuthConstants.cookieKey, this.user.email);
    }

    this.router.navigate([this.urls.index.index]);
    document.location.reload();
  }

}
