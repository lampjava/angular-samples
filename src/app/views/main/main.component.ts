import { Component, OnInit } from '@angular/core';

import $ from 'jquery/dist/jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Main Page!';

  ngOnInit() {
    console.log($.fn.jquery);
  }
}
