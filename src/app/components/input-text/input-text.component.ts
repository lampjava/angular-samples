import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../shared/services';

@Component({
  selector: 'app-comp-input-text',
  templateUrl: './input-text.component.html',
  providers: [ AppServices ]
})
export class InputTextComponent implements OnInit {

  constructor(private appServices: AppServices) {

  }

  ngOnInit(): void {
  }

}
