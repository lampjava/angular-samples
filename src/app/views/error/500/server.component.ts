import { Component } from '@angular/core';
import { AppServices } from '../../../shared/services';

@Component({
  selector: 'app-error-500',
  templateUrl: './server.component.html',
  styleUrls: [ './server.component.css' ],
  providers: [ AppServices ]
})
export class ServerComponent {

  urls: any;
  pageTitle: any = 'Internal Server Error';

  constructor(private appServices: AppServices) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

}
