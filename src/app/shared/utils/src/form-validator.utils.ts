import { Validators } from '@angular/forms';
import { LangConstants } from '../../constants';

export class FormValidatorUtils {

  public static messages: any = {
    'url': {
      'required': 'required-url',
      'pattern' : 'invaild-url'
    },
    'email': {
      'required': 'required-email'
    },
    'password': {
      'required': 'required-password',
      'minlength': 'minlength-password',
      'maxlength': 'maxlength-password'
    }
  };

  constructor() {}

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
