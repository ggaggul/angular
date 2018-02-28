import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {BasicLayoutComponent} from './basicLayout.component';
import {BlankLayoutComponent} from './blankLayout.component';

import {TopNavbarComponent} from '../topnavbar/topnavbar.component';
import {NavigationComponent} from '../navigation/navigation.component';
import {FooterComponent} from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    BasicLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavbarComponent
  ],
  exports: [
    FooterComponent,
    BasicLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavbarComponent
  ]
})

export class LayoutsModule {}
