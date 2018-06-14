import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ROUTES } from './app.routes';

import {MainModule} from './main/main.module';
import {ReservationModule} from './reservation/reservation.module';
import {TutorModule} from './tutor/tutor.module';
import {MypageModule} from  './mypage/mypage.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Base
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,

    // Route
    RouterModule.forRoot(ROUTES, /*{ preloadingStrategy: AppCustomPreloader }*/),

    // Pages
    MainModule,
    ReservationModule,
    TutorModule,
    MypageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
