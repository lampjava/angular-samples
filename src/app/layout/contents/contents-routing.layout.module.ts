import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlConstants } from '../../shared/constants';

import { ContentsLayoutComponent } from './contents.layout.component';
import { DashboardComponent } from '../../views/contents';

const routes: Routes = [
  {
    path: '', component: ContentsLayoutComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ContentsLayoutRoutingModule { }
