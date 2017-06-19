import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../../shared/services';

@Component({
  selector: 'app-main-mode',
  templateUrl: './mode.component.html',
  providers: [ AppServices ]
})
export class ModeComponent implements OnInit {

  urls: any;
  pageTitle: any = 'Mode';

  public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;

  constructor(private appServices: AppServices) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

  ngOnInit(): void {

  }

}
