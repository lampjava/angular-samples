import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';

const routes: Routes = [
    {
        path: '', component: DefaultComponent,
        children: [
          { path: 'dashboard', loadChildren: '../../views/contents/dashboard/dashboard.module#DashboardModule' },
          { path: 'error', loadChildren: '../../views/error/notfound/notfound.module#NotFoundModule' }
        //     { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
        //     { path: 'forms', loadChildren: './form/form.module#FormModule' },
        //     { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
        //     { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
        //     { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
        //     { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class DefaultRoutingModule { }
