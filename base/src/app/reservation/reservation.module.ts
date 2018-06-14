import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ReservationComponent} from './reservation.component';
import {ReservationService} from './shared/reservation.service';

@NgModule({
    imports : [
      BrowserModule
    ],
    declarations : [
      ReservationComponent
    ],
    exports : [
      ReservationComponent
    ],
    providers : [
      ReservationService
    ]
})

export class ReservationModule {}
