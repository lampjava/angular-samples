import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { HttpInterceptorModule } from 'ng-http-interceptor';
import { NgxBootstrapModule } from './extends/ngxbootstrap.module';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

import { CommonComponents } from '../../components/common.component.define';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TranslateModule,
    HttpInterceptorModule,
    NgxBootstrapModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TranslateModule,
    HttpInterceptorModule,
    NgxBootstrapModule,
    FileSelectDirective,
    FileDropDirective,
    CommonComponents
  ],
  declarations: [
    FileSelectDirective,
    FileDropDirective,
    CommonComponents
  ]
})
export class LayoutCommonModule { }
