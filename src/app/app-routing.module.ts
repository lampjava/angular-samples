import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// service components
import { MainComponent } from './views/main/main.component';

// guide components
import { GuideComponent } from './views/guide/guide.component';

// error components
import { PageNotFoundComponent } from './views/error/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: MainComponent },
  { path: 'guide', component: GuideComponent },
// { path: 'detail/:id', component: HeroDetailComponent },
// { path: 'heroes',     component: HeroesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
