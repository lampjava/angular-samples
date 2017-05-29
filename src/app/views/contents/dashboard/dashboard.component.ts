import { Component } from '@angular/core';
import { AppServices } from '../../../shared/services';

@Component({
  selector: 'app-contents-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [ './dashboard.component.css' ],
  providers: [ AppServices ]
})
export class DashboardComponent {

  pageTitle = 'Dashboard';

  constructor(private appServices: AppServices) {
    this.appServices.setTitle(this.pageTitle);
  }

}
