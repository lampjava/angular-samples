import { ElementRef } from '@angular/core';
import { StringUtils } from './string.utils';
import { LangConstants } from '../../constants';

export class ElementValidatorUtils {

  private static selections = [ 'checkbox', 'radio', 'select' ];

  private static attributes = {
    required: 'required',
    min: 'min',
    minLength: 'minlength',
    max: 'max',
    maxLength: 'maxlength',
    pattern: 'pattern',
  };

  private static executeRegExp(pattern: string, value: any): boolean {
    return !eval(pattern).test(value); // 반환값이 true 일 때 메세지가 지정되므로, 실행결과를 반대로 반환한다.
  }

  private static isSelection(type: string): boolean {
    return (this.selections.indexOf(type) >= 0);
  }

  private static validNumber(element: any): boolean {
    if (element.type === 'number') {
      return this.executeRegExp('/^[0-9]$/g', element.value);
    } else {
      return false;
    }
  }

  private static validEmail(element: any): boolean {
    if (element.type === 'email') {
      return this.executeRegExp('/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/g', element.value);
    } else {
      return false;
    }
  }

  private static validCheckbox(element: any): boolean {
    if(element.checked) {
      return false;
    } else {
      return true;
    }
  }

  private static validRadio(element: any): boolean {
    /**
     * 차후 라디오 그룹에 대한 Validation 구현할 것!
     * 현재는 interface 만 정의
     */
    return false;
  }

  private static validSelect(element: any): boolean {
    /**
     * 차후 <select>에 대한 Validation 구현할 것!
     * 현재는 interface 만 정의
     */
    return false;
  }

  private static checkRequired(attr: any, element: any): boolean {
    const attribute: string = attr.name.toLowerCase();
    let isValid = false;
    if (attribute === this.attributes.required) {
      if (this.isSelection(element.type)) {
        switch(element.type) {
          case this.selections[0]:
            isValid = this.validCheckbox(element);
            break;
          case this.selections[1]:
            isValid = this.validRadio(element);
            break;
          case this.selections[2]:
            isValid = this.validSelect(element);
            break;
        }
      } else {
        isValid = StringUtils.isEmpty(element.value);
      }
    }
    return isValid;
  }

  private static checkMinimum(attr: any, value: any): boolean {
    const attribute: string = attr.name.toLowerCase();
    if (attribute === this.attributes.min || attribute === this.attributes.minLength) {
      return (value.length < attr.value);
    }
  }

  private static checkMaximum(attr: any, value: any): boolean {
    const attribute: string = attr.name.toLowerCase();
    if (attribute === this.attributes.max || attribute === this.attributes.maxLength) {
      return (value.length > attr.value);
    }
  }

  private static checkPattern(attr: any, value: any): boolean {
    const attribute: string = attr.name.toLowerCase();
    if (attribute === this.attributes.pattern) {
      return this.executeRegExp(attr.value, value);
    }
  }

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
