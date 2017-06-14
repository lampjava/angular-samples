import { Validators } from '@angular/forms';
import { ValidatorUtils } from './validator.utils';
import { LangConstants } from '../../constants';

export class FormValidatorUtils extends ValidatorUtils  {

  public static messages: any = {
    'url': {
      'required': 'required-url',
      'pattern' : 'invaild-url'
    },
    'email': {
      'required': 'validation-empty-email'
    },
    'password': {
      'required': 'validation-empty-password',
      'minlength': 'validation-minlength-password',
      'maxlength': 'validation-maxlength-password'
    }
  };

  public static watchValueChanged(form?: any, targets?: any, data?: any): any {
    if (!form) {
      return;
    }
    for (const field in targets) {
      targets[field] = '';
      const control = form.get(field);
      if (control && !control.valid) {
        const messages = FormValidatorUtils.messages[field];
        for (const key in control.errors) {
          targets[field] += messages[key];
        }
      }
    }
    return targets;
  }

  public static emailRuleSet(target: any): any {
    return [target, [
          Validators.required
        ]
      ];
  }

  public static urlRuleSet(target: any): any {
    return [target, [
          Validators.required,
          Validators.pattern(/((http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w��-�롢뀖-�ｊ�-��\;\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?)/g)
        ]
      ];
  }

  public static passwordRuleSet(target: any): any {
    return [target, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]
      ];
  }

}
