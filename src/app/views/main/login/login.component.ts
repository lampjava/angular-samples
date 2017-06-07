import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthConstants } from '../../../shared/constants';
import { AppServices } from '../../../shared/services';
import { StorageUtils, FormValidatorUtils } from '../../../shared/utils';
import { User } from '../../../shared/models';

@Component({
  selector: 'app-main-login',
  templateUrl: './login.component.html',
  styles: [ './login.component.css' ],
  providers: [ AppServices ]
})
export class LoginComponent implements OnInit {

  urls: any;
  pageTitle: any = 'Login';
  user: User = new User({email: 'jinwoo.yuk@bespinglobal.com', additional: { birthday: '19820207'} });

  form: FormGroup;
  formTargets: any;

  constructor(
    public router: Router,
    private appServices: AppServices,
    private fb: FormBuilder
  ) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

  ngOnInit(): void {
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
    this.router.navigate([this.urls.contents.index]);
  }

}
