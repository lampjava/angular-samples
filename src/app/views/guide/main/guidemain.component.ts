import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guide',
  templateUrl: './guidemain.component.html'
})
export class GuideMainComponent implements OnInit {
  constructor(public router: Router) {
  }

  ngOnInit() {
  }

}
