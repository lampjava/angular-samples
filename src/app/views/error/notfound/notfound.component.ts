import { Component } from '@angular/core';
import { AppServices } from '../../../shared/services';

@Component({
  selector: 'app-error-notfound',
  templateUrl: './notfound.component.html',
  styles: [ './notfound.component.css' ],
  providers: [ AppServices ]
})
export class NotFoundComponent {

  urls: any;
  pageTitle: any = 'Not Found';

  constructor(private appServices: AppServices) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

}
