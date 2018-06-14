import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail-layout',
  templateUrl: './detailLayout.template.html'
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


}
