import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TimetableComponent} from './timetable.component';

@NgModule({
    imports : [
        BrowserModule
    ],
    declarations : [
        TimetableComponent
    ],
    exports : [
        TimetableComponent
    ]
})

export class ReservationModule {}
