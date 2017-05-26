import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { HeaderComponent, SideBarComponent, FooterComponent } from '../../components';

@NgModule({
    imports: [
        CommonModule,
        DefaultRoutingModule,
        TranslateModule
    ],
    declarations: [
      DefaultComponent,
      HeaderComponent,
      SideBarComponent,
      FooterComponent
    ]
})
export class DefaultModule { }
