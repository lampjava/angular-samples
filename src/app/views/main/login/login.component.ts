import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthConstants } from '../../../shared/constants';
import { AppServices } from '../../../shared/services';
import { StorageUtils, ValidatorUtils } from '../../../shared/utils';
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
  user: User = new User();

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
      'email': ValidatorUtils.emailRuleSet(this.user.email),
      'password': ValidatorUtils.passwordRuleSet(this.user.password)
    });
    this.form.valueChanges.subscribe(
      data => this.formTargets = ValidatorUtils.watchValueChanged(this.form, this.formTargets, data)
    );
    this.formTargets = ValidatorUtils.watchValueChanged(this.form, this.formTargets);
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
