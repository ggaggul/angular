import {Component, HostListener, OnInit} from '@angular/core';
import {fadeInAnimation} from "../animation/router.transition";

@Component({
  selector: 'app-detail-layout',
  templateUrl: './detailLayout.template.html',
  animations: [ fadeInAnimation ],
})
export class DetailLayoutComponent implements OnInit {

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
