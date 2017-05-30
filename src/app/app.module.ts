import { NgModule } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAuth } from './shared/authentications';

// AoT requires an exported function for factories
export function HttpLoaderFactory (http: Http) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    LoginAuth,
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
