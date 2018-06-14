import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector : 'app-myinfo',
  templateUrl : './myinfo.template.html'
})

export class MyinfoComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
      this.init();
  }

  init(): void {
  }

}
