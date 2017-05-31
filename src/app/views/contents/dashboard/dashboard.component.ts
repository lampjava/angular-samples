import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppServices } from '../../../shared/services';

@Component({
  selector: 'app-contents-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [ './dashboard.component.css' ],
  providers: [ AppServices ]
})
export class DashboardComponent {

  urls: any;
  pageTitle: any = 'Dashboard';

  constructor(
    public router: Router,
    private appServices: AppServices
  ) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

}
