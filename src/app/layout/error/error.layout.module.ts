import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ErrorLayoutRoutingModule } from './error-routing.layout.module';
import { ErrorLayoutComponent } from './error.layout.component';

import { NotFoundComponent, ServerComponent } from '../../views/error';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ErrorLayoutRoutingModule
  ],
  declarations: [
    ErrorLayoutComponent,
    NotFoundComponent,
    ServerComponent
  ]
})
export class ErrorLayoutModule { }
