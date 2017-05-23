import { Component, OnInit } from '@angular/core';

import { AppConstants } from '../core/constants/app.constants';
import { StringUtils } from '../core/utils/string.utils';
import { ObjectUtils } from '../core/utils/object.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements  OnInit {
  isHideFooter: boolean;
  isHideHeader: boolean;
  ishideSideNav: boolean;
  ishideAside: boolean;

  ngOnInit () {
    let params = ObjectUtils.getDocumentInfo('querystringJSON');

    // Page Layout 설정
    this.isHideHeader = StringUtils.toBoolean(params[AppConstants.parameter['hideHeader']]);
    this.isHideFooter = StringUtils.toBoolean(params[AppConstants.parameter['hideFooter']]);
    this.ishideSideNav = StringUtils.toBoolean(params[AppConstants.parameter['hideSideNav']]);
    this.ishideAside = StringUtils.toBoolean(params[AppConstants.parameter['hideAside']]);
    if (StringUtils.toBoolean(params[AppConstants.parameter['onlyContent']])) {
      this.isHideHeader = true;
      this.isHideFooter = true;
      this.ishideSideNav = true;
      this.ishideAside = true;
    }
  }

}
