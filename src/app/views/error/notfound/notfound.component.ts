import { Component } from '@angular/core';
import { AppServices } from '../../../shared/services';

@Component({
  selector: 'app-error-notfound',
  templateUrl: './notfound.component.html',
  styles: [ './notfound.component.css' ],
  providers: [ AppServices ]
})
export class NotFoundComponent {

  pageTitle = 'Dashboard';

  constructor(private appServices: AppServices) {
    this.appServices.setTitle(this.pageTitle);
  }

}
