import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConstants, UrlConstants } from '../../constants';
import { StringUtils } from '../../utils';

@Injectable()
export class AppServices {

  constructor (private titleService: Title) { }

  public setTitle(obj: string | Array<string>): void {
    const titleSeperator = ' | ';
    let title = '';
    if (typeof obj === 'string') {
      if (StringUtils.isNotEmpty(obj)) {
        title = obj + titleSeperator;
      }
    } else if (typeof obj === 'object') {
      for (const str of obj) {
        if (StringUtils.isNotEmpty(str)) {
          title += str + titleSeperator;
        }
      }
    }
    title += AppConstants.appName;
    this.titleService.setTitle(title);
  }

  public getTitle(): string {
    return this.titleService.getTitle();
  }

  public getUrls(): any {
    return UrlConstants;
  }

}
