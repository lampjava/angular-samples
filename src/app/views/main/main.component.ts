import { Component, OnInit } from '@angular/core';
import { Globals } from '../../core/app.constants';

import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ Globals ]
})
export class MainComponent implements OnInit {
  title = 'Main Page!';
  appName: string;
  clickCnt: number = 1;

  constructor(public globals: Globals) {
    this.appName = this.globals.appName;
    console.log('-------------------- 1');
    console.log(this.globals.appName);
    console.log('-------------------- 1');
  }

  ngOnInit () {
    console.log($.fn.jquery);
    console.log('-------------------- 2');
    console.log(this.globals.appName);
    console.log('-------------------- 2');
  }

  print() {
    console.log('click');
    this.globals.setAppName('sixman' + (this.clickCnt++));
    this.appName = this.globals.getAppName();
  }
}
