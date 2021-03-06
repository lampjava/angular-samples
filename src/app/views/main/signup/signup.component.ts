import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { AppServices } from '../../../shared/services';
import { ElementValidatorUtils } from '../../../shared/utils';

@Component({
  selector: 'app-main-signup',
  templateUrl: './signup.component.html',
  providers: [ AppServices ]
})
export class SignupComponent implements OnInit {

  urls: any;
  pageTitle: any = 'Sign Up';
  validMessage: object = {};

  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('agree') agree: ElementRef;

  constructor(
    public router: Router, private appServices: AppServices
  ) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

  ngOnInit(): void {
  }

  onCheck(): void {
    const targets: Array<ElementRef> = [this.email, this.password, this.agree];
    this.validMessage = ElementValidatorUtils.validator(targets);
  }

  watchValue(event): void {
    this.onCheck();
  }
}
