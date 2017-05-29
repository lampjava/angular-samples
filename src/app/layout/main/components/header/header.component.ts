import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styles: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onLoggedout(): void {
    localStorage.removeItem('isLoggedin');
  }

}
