import { Component } from '@angular/core';

import { Globals } from '../../core/app.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ Globals ]
})
export class FooterComponent {
  appName: string;

  constructor(private globals: Globals) {
    this.appName = this.globals.appName;
  }
}
