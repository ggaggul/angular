import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MainLayoutComponent} from './mainLayout.component';
import {DetailLayoutComponent} from './detailLayout.component';
import {BlankLayoutComponent} from './blankLayout.component';

import {TopNavbarComponent} from '../topnavbar/topnavbar.component';
import {TopNavbarReserveComponent} from '../topnavbar/topnavbar-reserve.component';
import {NavigationComponent} from '../navigation/navigation.component';
import {FooterComponent} from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    MainLayoutComponent,
    DetailLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavbarComponent,
    TopNavbarReserveComponent
  ],
  exports: [
    FooterComponent,
    MainLayoutComponent,
    DetailLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavbarComponent,
    TopNavbarReserveComponent
  ]
})

export class LayoutsModule {}
