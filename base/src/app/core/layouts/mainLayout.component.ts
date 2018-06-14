import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './mainLayout.template.html'
})
export class MainLayoutComponent implements OnInit {

  @HostListener('resize') resize() {
    // do work
  }

  constructor () {}

  ngOnInit(): any {
  }

  onDeactivate () {
    window.scrollTo(0, 0);
  }


}
