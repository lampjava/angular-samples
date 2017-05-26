import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './app-auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', loadChildren: './layout/main/main.layout.module#MainLayoutModule' },
    { path: 'guide', loadChildren: './layout/guide/guide.layout.module#GuideLayoutModule' },
    { path: 'contents', loadChildren: './layout/contents/contents.layout.module#ContentsLayoutModule', canActivate: [ AuthGuard ] },
    { path: 'error', loadChildren: './layout/error/error.layout.module#ErrorLayoutModule' },
    { path: '**', redirectTo: '/error/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
