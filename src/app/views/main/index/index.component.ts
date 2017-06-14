import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../../shared/services';

@Component({
  selector: 'app-main-index',
  templateUrl: './index.component.html',
  styleUrls: [ './index.component.css' ],
  providers: [ AppServices ]
})
export class IndexComponent implements OnInit {

  urls: any;
  pageTitle: any = 'Main';

  posts: Array<any>;

  constructor(private appServices: AppServices) {
    this.urls = appServices.getUrls();
    appServices.setTitle(this.pageTitle);
  }

  ngOnInit(): void {
    this.printPosts();
  }

  printPosts(): void {
    this.posts = [
      {'title': 'Angular4 ngFor statement', 'subtitle': 'This is Angular ngFor sample', 'writer': 'BespinGlobal on September 24, 2014'},
      {'title': 'Angular4 ngFor statement', 'subtitle': 'This is Angular ngFor sample', 'writer': 'BespinGlobal on September 25, 2015'},
      {'title': 'Angular4 ngFor statement', 'subtitle': 'This is Angular ngFor sample', 'writer': 'BespinGlobal on September 26, 2016'},
      {'title': 'Angular4 ngFor statement', 'subtitle': 'This is Angular ngFor sample', 'writer': 'BespinGlobal on September 27, 2017'}
    ];
  }
}
