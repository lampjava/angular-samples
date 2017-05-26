import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-guide',
  templateUrl: './guide.component.html'
})
export class GuideComponent implements OnInit {
  constructor(public router: Router) {
  }

  ngOnInit() {
  }

}
