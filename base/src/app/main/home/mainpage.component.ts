import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector : 'app-main-mainpage',
  templateUrl : './mainpage.template.html'
})

export class MainpageComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
      this.init();
  }

  init(): void {
  }

}
