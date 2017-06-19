import { NgModule } from '@angular/core';
import { LayoutCommonModule } from '../modules/layout-common.module';

import { ContentsLayoutRoutingModule } from './contents-routing.layout.module';
import { ContentsLayoutComponent } from './contents.layout.component';

import { HeaderComponent, FooterComponent } from './components';
import { DashboardComponent } from '../../views/contents';

@NgModule({
  imports: [
    LayoutCommonModule,
    ContentsLayoutRoutingModule
  ],
  declarations: [
    ContentsLayoutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ]
})
export class ContentsLayoutModule { }
