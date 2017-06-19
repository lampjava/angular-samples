import { NgModule } from '@angular/core';
import { LayoutCommonModule } from '../layout-common.module';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

import { MainLayoutRoutingModule } from './main-routing.layout.module';
import { MainLayoutComponent } from './main.layout.component';

import { HeaderComponent, FooterComponent } from './components';
import { IndexComponent, LoginComponent, SignupComponent, FileUploadComponent, UIComponent } from '../../views/main';

@NgModule({
  imports: [
    LayoutCommonModule,
    MainLayoutRoutingModule
  ],
  declarations: [
    FileSelectDirective,
    FileDropDirective,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    FileUploadComponent,
    UIComponent
  ]
})
export class MainLayoutModule { }
