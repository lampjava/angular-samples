import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StringUtils, ObjectUtils } from '../shared/utils';
import { AppConstants } from '../shared/constants';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styles: [ './layout.component.css' ]
})
export class LayoutComponent implements OnInit {
    isHideFooter = false;
    isHideHeader = false;
    isHideSideBar = false;

    constructor(public router: Router) {
    }

    ngOnInit() {
        const params = ObjectUtils.getDocumentInfo('querystringJSON');
        // Page Layout 설정
        this.isHideHeader = StringUtils.toBoolean(params[AppConstants.hideHeader]);
        this.isHideFooter = StringUtils.toBoolean(params[AppConstants.hideFooter]);
        this.isHideSideBar = StringUtils.toBoolean(params[AppConstants.hideSideBar]);
        if (StringUtils.toBoolean(params[AppConstants.onlyContent])) {
          this.isHideHeader = true;
          this.isHideFooter = true;
          this.isHideSideBar = true;
        }

        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }
    }

}
