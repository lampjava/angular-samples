import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { HttpInterceptorModule } from 'ng-http-interceptor';

import { MainLayoutRoutingModule } from './main-routing.layout.module';
import { MainLayoutComponent } from './main.layout.component';

import { HeaderComponent, FooterComponent } from './components';
import { IndexComponent, LoginComponent, SignupComponent } from '../../views/main';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TranslateModule,
    MainLayoutRoutingModule,
    HttpInterceptorModule
  ],
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class MainLayoutModule { }
