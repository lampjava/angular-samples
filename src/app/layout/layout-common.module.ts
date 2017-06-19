import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { HttpInterceptorModule } from 'ng-http-interceptor';
import { NgxBootstrapModule } from './ngxbootstrap.module';

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
    NgxBootstrapModule
  ]
})
export class LayoutCommonModule { }
