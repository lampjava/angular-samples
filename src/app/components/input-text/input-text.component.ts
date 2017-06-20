import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../shared/services';
import { AppConstants } from '../../shared/constants';


@Component({
  selector: 'app-comp-input-text',
  templateUrl: './input-text.component.html',
  providers: [ AppServices ]
})
export class InputTextComponent implements OnInit {

  mode: string = AppConstants.mode.create;

  constructor(private appServices: AppServices) {
  }

  ngOnInit(): void {
  }

  public setMode(mode: string): void {
    this.mode = mode;
  }
}
