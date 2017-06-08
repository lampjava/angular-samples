import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../../shared/services';
declare const $: any;

@Component({
  selector: 'app-guide-index',
  templateUrl: './index.component.html',
  styles: [ './index.component.css' ],
  providers: [ AppServices ]
})
export class IndexComponent implements OnInit{

  urls: any;
  pageTitle: any = 'Guide';

  constructor(private appServices: AppServices) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

  private eventBinder(): void {
    $('.menu .item').tab();
  }

  ngOnInit(): void {
    this.eventBinder();
  }
}
