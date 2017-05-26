import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { GuideLayoutRoutingModule } from './guide-routing.layout.module';
import { GuideLayoutComponent } from './guide.layout.component';

import { HeaderComponent } from './components';
import { IndexComponent } from '../../views/guide';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    GuideLayoutRoutingModule
  ],
  declarations: [
    GuideLayoutComponent,
    HeaderComponent,
    IndexComponent
  ]
})
export class GuideLayoutModule { }
