import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthConstants, UrlConstants } from '../../constants';
import { StorageUtils } from '../../utils';

@Injectable()
export class LoginAuth implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    if (StorageUtils.getItem(AuthConstants.authKey)) {
      return true;
    }

    this.router.navigate([UrlConstants.index.login]);
    return false;
  }

}
