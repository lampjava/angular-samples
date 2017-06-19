import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../../shared/services';

@Component({
  selector: 'app-main-ui',
  templateUrl: './ui.component.html',
  providers: [ AppServices ]
})
export class UIComponent implements OnInit {

  urls: any;
  pageTitle: any = 'UI';

  constructor(private appServices: AppServices) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

  ngOnInit(): void {

  }

}
