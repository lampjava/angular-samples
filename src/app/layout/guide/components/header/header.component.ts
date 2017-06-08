import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppServices } from '../../../../shared/services';
declare const $: any;

@Component({
  selector: 'app-guide-header',
  templateUrl: './header.component.html',
  styles: [ './header.component.css' ],
  providers: [ AppServices ]
})
export class HeaderComponent implements OnInit {

  urls: any;

  constructor(public router: Router, private translate: TranslateService, private appServices: AppServices) {
    this.urls = appServices.getUrls();
  }

  private eventBinder(): void {
    $('.main.menu').visibility({
      type: 'fixed'
    });

    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
      on: 'hover'
    });
  }

  ngOnInit(): void {
    this.eventBinder();
  }


}
