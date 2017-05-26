import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main.layout.component';

import { IndexComponent, LoginComponent, SignupComponent } from '../../views/main';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: SignupComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainLayoutRoutingModule { }
