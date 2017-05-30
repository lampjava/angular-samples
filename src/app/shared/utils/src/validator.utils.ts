import { Validators } from '@angular/forms';

export class ValidatorUtils {

  public static validationMessages: any = {
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
        const messages = ValidatorUtils.validationMessages[field];
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

  public static passwordRuleSet(target: any): any {
    return [target, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]
      ];
  }

}
