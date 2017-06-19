import { NgModule } from '@angular/core';
import { LayoutCommonModule } from '../modules/layout-common.module';

import { MainLayoutRoutingModule } from './main-routing.layout.module';
import { MainLayoutComponent } from './main.layout.component';

import { HeaderComponent, FooterComponent } from './components';
import { IndexComponent, LoginComponent, SignupComponent, FileUploadComponent, UIComponent, ModeComponent } from '../../views/main';

@NgModule({
  imports: [
    LayoutCommonModule,
    MainLayoutRoutingModule
  ],
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    FileUploadComponent,
    UIComponent,
    ModeComponent
  ]
})
export class MainLayoutModule { }
