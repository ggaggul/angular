import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector : 'app-home',
  templateUrl : './home.template.html'
})

export class HomeComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
      this.init();
  }

  init(): void {
  }

}
