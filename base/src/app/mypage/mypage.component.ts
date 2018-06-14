import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector : 'app-mypage',
  templateUrl : './mypage.template.html'
})

export class MypageComponent {

  constructor() {
  }

  ngAfterViewInit() {
      this.init();
  }

  init(): void {
  }

}
