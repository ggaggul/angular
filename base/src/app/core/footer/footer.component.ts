import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.template.html'
})
export class FooterComponent {
  constructor(private router: Router) {}

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }
}
