import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxBootstrapModule } from '../modules/extends/ngxbootstrap.module';

import { ErrorLayoutRoutingModule } from './error-routing.layout.module';
import { ErrorLayoutComponent } from './error.layout.component';

import { NotFoundComponent, ServerComponent } from '../../views/error';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgxBootstrapModule,
    ErrorLayoutRoutingModule
  ],
  declarations: [
    ErrorLayoutComponent,
    NotFoundComponent,
    ServerComponent
  ]
})
export class ErrorLayoutModule { }
