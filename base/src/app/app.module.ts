import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { ROUTES } from './app.routes';

// Mainpage
import {MainpageModule} from "./main/mainpage.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Base
    BrowserModule,
    CoreModule,

    //Route
    RouterModule.forRoot(ROUTES, /*{ preloadingStrategy: AppCustomPreloader }*/),

    //Pages
    MainpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
