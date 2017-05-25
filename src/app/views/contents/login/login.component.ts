import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppConstants } from '../../../../core/constants';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

    constructor(public router: Router, private translate: TranslateService) {
    }

    ngOnInit() {
    }

    onLogin() {
      localStorage.setItem(AppConstants.appAuthKey, 'true');
      this.router.navigate(['/dashboard']);
    }

    setTranslate(language: string) {
      this.translate.use(language);
    }

}
