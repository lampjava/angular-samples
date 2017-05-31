import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlConstants } from '../../shared/constants';

import { GuideLayoutComponent } from './guide.layout.component';
import { IndexComponent } from '../../views/guide';

const routes: Routes = [
  {
    path: '', component: GuideLayoutComponent,
    children: [
      { path: '', component: IndexComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class GuideLayoutRoutingModule { }
