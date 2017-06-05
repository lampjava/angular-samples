import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NaverServices } from '../../shared/services';
import { FormValidatorUtils } from '../../shared/utils';

@Component({
  selector: 'app-component-shortly',
  templateUrl: './shortly.component.html',
  providers: [ NaverServices ]
})

export class ShortlyComponent implements OnInit {

  form: FormGroup;
  formTargets: any;

  @ViewChild('url') url: ElementRef;
  shorltyUrl: string;

  constructor(
    private naverServices: NaverServices,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.formTargets = {
      'url': ''
    };
    this.setFormRuleSet();
  }

  setFormRuleSet(): void {
    this.form = this.fb.group({
      'url': FormValidatorUtils.urlRuleSet(this.url.nativeElement.value)
    });
    this.form.valueChanges.subscribe(
      data => this.formTargets = FormValidatorUtils.watchValueChanged(this.form, this.formTargets, data)
    );
    this.formTargets = FormValidatorUtils.watchValueChanged(this.form, this.formTargets);
  }

  getShorty(): void {
    this.shorltyUrl = 'http://me2.do/5HC4WnIO';
    this.naverServices.getShortlyUrl(this.url.nativeElement.value).then(res => {
      console.log(res);
    });
  }
}
