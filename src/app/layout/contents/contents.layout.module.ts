import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ContentsLayoutRoutingModule } from './contents-routing.layout.module';
import { ContentsLayoutComponent } from './contents.layout.component';

import { HeaderComponent, FooterComponent } from './components';
import { DashboardComponent } from '../../views/contents';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
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
