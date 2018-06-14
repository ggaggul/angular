import {Component, AfterViewInit} from '@angular/core';
import * as slick from 'slick-carousel';
declare var jQuery:any;

@Component({
  selector : 'app-reservation',
  templateUrl : './reservation.template.html'
})

export class ReservationComponent {

  constructor() {
  }

  ngAfterViewInit() {
      this.init();
  }

  init(): void {
    jQuery(".date").slick({
      dots: true,
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 7
    });

    jQuery(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    jQuery(".variable").slick({
      dots: true,
      infinite: true,
      variableWidth: true
    });

  }

}
