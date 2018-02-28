import {Component, AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector : 'mainpage',
  templateUrl : './mainpage.template.html'
})

export class MainpageComponent implements AfterViewInit {

  constructor (){
  }

  ngAfterViewInit(){
      this.init();
  }

  init(): void {
  }

}
