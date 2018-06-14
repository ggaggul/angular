import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector : 'app-signin',
  templateUrl : './signin.template.html'
})

export class SigninComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
      this.init();
  }

  init(): void {
  }

}
