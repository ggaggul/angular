import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TutorListComponent} from './list/tutor-list.component'
import {TutorDetailComponent} from './detail/tutor-detail.component'
import {TutorService} from './shared/tutor.service'

@NgModule({
    imports : [
      BrowserModule
    ],
    declarations : [
      TutorListComponent,
      TutorDetailComponent
    ],
    exports : [
      TutorListComponent,
      TutorDetailComponent
    ],
    providers : [
      TutorService
    ]
})

export class TutorModule {}
