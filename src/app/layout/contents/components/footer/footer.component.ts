import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AppServices } from '../../../../shared/services';

@Component({
  selector: 'app-contents-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.css' ],
  providers: [ AppServices ]
})
export class FooterComponent implements OnInit {

  urls: any;

  constructor(public router: Router, private translate: TranslateService, private appServices: AppServices) {
    this.urls = appServices.getUrls();
  }

  ngOnInit(): void {
  }

  setTranslate(language: string): void {
    this.translate.use(language);
  }
}
