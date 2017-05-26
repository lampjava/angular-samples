import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorLayoutComponent } from './error.layout.component';

import { NotFoundComponent } from '../../views/error';

const routes: Routes = [
  {
    path: '', component: ErrorLayoutComponent,
    children: [
      { path: '', component: NotFoundComponent },
      { path: 'not-found', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ErrorLayoutRoutingModule { }
