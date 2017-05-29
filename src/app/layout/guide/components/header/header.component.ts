import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
declare const $: any;

@Component({
  selector: 'app-guide-header',
  templateUrl: './header.component.html',
  styles: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private translate: TranslateService) { }

  ngOnInit(): void{
    $('.main.menu').visibility({
      type: 'fixed'
    });

    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
      on: 'hover'
    });
  }

  onLoggedout(): void {
    localStorage.removeItem('isLoggedin');
  }

  changeLang(language: string): void {
    this.translate.use(language);
  }

}
