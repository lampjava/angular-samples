import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';

import { ContentsLayoutRoutingModule } from './contents-routing.layout.module';
import { ContentsLayoutComponent } from './contents.layout.component';

import { HeaderComponent, FooterComponent } from './components';
import { DashboardComponent } from '../../views/contents';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
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
