import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contents-footer',
  templateUrl: './footer.component.html',
  styles: [ './footer.component.css' ]
})
export class FooterComponent implements OnInit {

  constructor(public router: Router, private translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  setTranslate(language: string): void {
    this.translate.use(language);
  }
}
