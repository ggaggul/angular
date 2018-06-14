import {Component, HostListener, OnInit} from '@angular/core';
import {fadeInAnimation} from "../animation/router.transition";

@Component({
  selector: 'app-main-layout',
  templateUrl: './mainLayout.template.html',
  animations: [ fadeInAnimation ],
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

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }


}
