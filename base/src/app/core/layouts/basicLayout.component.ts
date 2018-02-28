import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-core-basic-layout',
  templateUrl: './basicLayout.template.html'
})
export class BasicLayoutComponent implements OnInit {

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
