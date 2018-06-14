import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MyinfoComponent} from './myinfo/myinfo.component';
import {FaqComponent} from './faq/faq.component';
import {LoginComponent} from './login/login.component';
import {SigninComponent} from './signin/signin.component'
import {MainService} from './shared/main.service';

@NgModule({
    imports : [
      BrowserModule,
      RouterModule
    ],
    declarations : [
      HomeComponent,
      MyinfoComponent,
      FaqComponent,
      LoginComponent,
      SigninComponent
    ],
    exports : [
      HomeComponent,
      MyinfoComponent,
      FaqComponent,
      LoginComponent,
      SigninComponent
    ],
    providers : [
      MainService
    ]
})

export class MainModule {}
