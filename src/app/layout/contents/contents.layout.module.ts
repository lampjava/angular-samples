import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { HttpInterceptorModule } from 'ng-http-interceptor';

import { ContentsLayoutRoutingModule } from './contents-routing.layout.module';
import { ContentsLayoutComponent } from './contents.layout.component';

import { HeaderComponent, FooterComponent } from './components';
import { ShortlyComponent } from '../../components';
import { DashboardComponent } from '../../views/contents';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpInterceptorModule,
    TranslateModule,
    ContentsLayoutRoutingModule
  ],
  declarations: [
    ContentsLayoutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ShortlyComponent
  ]
})
export class ContentsLayoutModule { }
