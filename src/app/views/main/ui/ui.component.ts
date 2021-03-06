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

  public totalItems: number = 64;
  public currentPage: number = 4;
  public smallnumPages: number = 0;

  constructor(private appServices: AppServices) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

  ngOnInit(): void {

  }

  public setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  public pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

}
