import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector : 'app-login',
  templateUrl : './login.template.html'
})

export class LoginComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
      this.init();
  }

  init(): void {
  }

}
