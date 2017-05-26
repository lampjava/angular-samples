import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GuideComponent } from './guide.component';
import { GuideRoutingModule } from './guide-routing.module';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
    imports: [
        GuideRoutingModule,
        RouterModule
    ],
    declarations: [
      GuideComponent,
      HeaderComponent
    ]
})
export class GuideModule {}
