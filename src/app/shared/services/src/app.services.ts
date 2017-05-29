import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConstants } from '../../constants';
import { StringUtils } from '../../utils';

@Injectable()
export class AppServices {

  private Stringutils: any;

  constructor (private titleService: Title) { }

  public setTitle (title?: string) {
    const titleFormat = '@@title@@ | ' + AppConstants.appName;
    if (StringUtils.isNotEmpty(title)) {
      title = titleFormat.replace('@@title@@', title);
      this.titleService.setTitle(title);
    }
  }

  public getTitle () {
    return this.titleService.getTitle();
  }

}
