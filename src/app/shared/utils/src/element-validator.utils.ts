import { ElementRef } from '@angular/core';
import { ValidatorUtils } from './validator.utils';
import { LangConstants } from '../../constants';

export class ElementValidatorUtils extends ValidatorUtils {

  public static validator(elements: Array<ElementRef>): any {
    const validMessage: object = {};

    elementFor:
    for (const element of elements) {
      const that = element.nativeElement;
      const id = that.id;
      const value = that.value;
      for (const attr of that.attributes) {
        if (this.checkRequired(attr, that)) {
          validMessage[id] = 'error-required';
          continue elementFor;
        }
        if (this.validNumber(that)) {
          validMessage[id] = 'error-number';
          continue elementFor;
        }
        if (this.validEmail(that)) {
          validMessage[id] = 'error-email';
          continue elementFor;
        }
        if (this.checkMinimum(attr, value)) {
          validMessage[id] = 'error-minlength';
          continue elementFor;
        }
        if (this.checkMaximum(attr, value)) {
          validMessage[id] = 'error-maxlength';
          continue elementFor;
        }
        if (this.checkPattern(attr, value)) {
          validMessage[id] = 'error-pattern';
          continue elementFor;
        }
      }
    }
    return validMessage;
  }

}
