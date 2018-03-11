import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector : 'app-reservation-timetable',
  templateUrl : './timetable.template.html'
})

export class TimetableComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
      this.init();
  }

  init(): void {
  }

}
