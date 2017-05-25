import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './notfound.component';
import { NotFoundRoutingModule } from './notfound-routing.module';

@NgModule({
    imports: [
        NotFoundRoutingModule,
        RouterModule
    ],
    declarations: [ NotFoundComponent ]
})
export class NotFoundModule {}
