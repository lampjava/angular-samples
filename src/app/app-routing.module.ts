import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './app-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/default/default.module#DefaultModule',
    canActivate: [ AuthGuard ]
  },
  { path: 'login', loadChildren: './views/contents/login/login.module#LoginModule' },
  { path: 'sign-up', loadChildren: './views/contents/signup/signup.module#SignupModule' },
  { path: 'guide', loadChildren: './layout/guide/guide.module#GuideModule' },
  { path: 'not-found', loadChildren: './views/error/notfound/notfound.module#NotFoundModule' },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
