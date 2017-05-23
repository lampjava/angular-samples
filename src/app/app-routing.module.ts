import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './views/main/main.component';
import { GuideComponent } from './views/guide/guide.component';
import { PageNotFoundComponent } from './views/error/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: MainComponent },
  { path: 'guide', component: GuideComponent },
// { path: 'detail/:id', component: HeroDetailComponent },
// { path: 'heroes',     component: HeroesComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
