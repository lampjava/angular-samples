import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdRadioModule,
  MdSidenavModule
} from '@angular/material';

// Default Components
import { AppComponent } from './app.component';
import { GnbComponent } from './components/gnb/gnb.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/sidenav/sidenav.component';

// Service Components
import { MainComponent } from './views/main/main.component';

// Guide Components
import { GuideComponent } from './views/guide/guide.component';

// Error Components
import { PageNotFoundComponent } from './views/error/notfound.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdRadioModule,
    MdSidenavModule
  ],
  declarations: [
    AppComponent,
    GnbComponent,
    FooterComponent,
    SideNavComponent,
    MainComponent,
    GuideComponent,
    PageNotFoundComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent, GnbComponent, FooterComponent, SideNavComponent ]
})
export class AppModule { }
