import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MainpageComponent} from './home/mainpage.component';
import {MainpageService} from './shared/mainpage.service';

@NgModule({
    imports : [
        BrowserModule
    ],
    declarations : [
        MainpageComponent
    ],
    exports : [
        MainpageComponent
    ],
    providers : [
        MainpageService
    ]
})

export class MainpageModule {}
