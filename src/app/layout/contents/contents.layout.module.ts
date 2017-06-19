import { NgModule } from '@angular/core';
import { LayoutCommonModule } from '../layout-common.module';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

import { ContentsLayoutRoutingModule } from './contents-routing.layout.module';
import { ContentsLayoutComponent } from './contents.layout.component';

import { HeaderComponent, FooterComponent } from './components';
import { ShortUrlComponent } from '../../components';
import { DashboardComponent } from '../../views/contents';

@NgModule({
  imports: [
    LayoutCommonModule,
    ContentsLayoutRoutingModule
  ],
  declarations: [
    FileSelectDirective,
    FileDropDirective,
    ContentsLayoutComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ShortUrlComponent
  ]
})
export class ContentsLayoutModule { }
