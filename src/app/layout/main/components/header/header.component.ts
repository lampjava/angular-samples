import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from '../../../../shared/constants';
import { AppServices } from '../../../../shared/services';
import { StorageUtils } from '../../../../shared/utils';

@Component({
  selector: 'app-main-header',
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
