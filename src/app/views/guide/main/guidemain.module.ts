import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GuideMainComponent } from './guidemain.component';
import { GuideMainRoutingModule } from './guidemain-routing.module';

@NgModule({
    imports: [
        GuideMainRoutingModule,
        RouterModule
    ],
    declarations: [GuideMainComponent]
})
export class GuideMainModule {}
