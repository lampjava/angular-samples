import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Default Components
import { AppComponent } from './app.component';
import {
 GnbComponent,
 FooterComponent,
 SideNavComponent
} from './components';

// Components
import { MainComponent } from './views';
import { GuideMainComponent } from './views/guide';
import { PageNotFoundComponent } from './views/error';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    GnbComponent,
    FooterComponent,
    SideNavComponent,
    MainComponent,
    GuideMainComponent,
    PageNotFoundComponent
  ],
  providers: [ ],
  bootstrap: [
    AppComponent,
    GnbComponent,
    FooterComponent,
    SideNavComponent
  ]
})
export class AppModule { }
