import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MypageComponent} from './mypage.component';
import {MypageService} from './shared/mypage.service';

@NgModule({
    imports : [
      BrowserModule
    ],
    declarations : [
      MypageComponent
    ],
    exports : [
      MypageComponent
    ],
    providers : [
      MypageService
    ]
})

export class MypageModule {}
