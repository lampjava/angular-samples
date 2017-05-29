import { Component } from '@angular/core';
import { AppServices } from '../../../shared/services';

@Component({
  selector: 'app-main-index',
  templateUrl: './index.component.html',
  styles: [ './index.component.css' ],
  providers: [ AppServices ]
})
export class IndexComponent {

  pageTitle = 'Main';

  constructor(private appServices: AppServices) {
     this.appServices.setTitle(this.pageTitle);
  }

}
