import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector : 'app-tutor-detail',
  templateUrl : './tutor-detail.template.html'
})

export class TutorDetailComponent {

  constructor() {
  }

  ngAfterViewInit() {
      this.init();
  }

  init(): void {
  }

}
