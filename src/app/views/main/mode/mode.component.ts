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
  mode: string = 'view';

  constructor(private appServices: AppServices) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

  ngOnInit(): void {

  }

  public setMode(): void {
    if (this.mode === 'view') {
      this.mode = 'edit';
    } else if (this.mode === 'edit') {
      this.mode = 'view';
    }
  }

}
