import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppServices } from '../../../../shared/services';
import { StorageUtils } from '../../../../shared/utils/src/storage.utils';
import { AuthConstants } from '../../../../shared/constants/src/auth.constants';
declare const $: any;

@Component({
  selector: 'app-contents-header',
  templateUrl: './header.component.html',
  styles: [ './header.component.css' ],
  providers: [ AppServices ]
})
export class HeaderComponent implements OnInit {

  urls: any;

  constructor(public router: Router, private appServices: AppServices) {
    this.urls = appServices.getUrls();
  }

  ngOnInit(): void {
  }

  onLoggedout(): void {
    StorageUtils.removeItem(AuthConstants.authKey);
  }

}
