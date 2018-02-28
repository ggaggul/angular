import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic',
  templateUrl: './basicLayout.template.html',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class BasicLayoutComponent implements OnInit{
  constructor(){}

  ngOnInit():any {
  }

  onResize(){
  }

  onDeactivate() {
    window.scrollTo(0, 0);
  }


}
