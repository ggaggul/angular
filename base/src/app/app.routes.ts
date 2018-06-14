import {Routes} from '@angular/router';

// Base
import {MainLayoutComponent} from './core/layouts/mainLayout.component';
import {DetailLayoutComponent} from './core/layouts/detailLayout.component';
import {HomeComponent} from './main/home/home.component';
import {ReservationComponent} from "./reservation/reservation.component";
import {TutorListComponent} from './tutor/list/tutor-list.component';
import {TutorDetailComponent} from './tutor/detail/tutor-detail.component';
import {MypageComponent} from './mypage/mypage.component';
import {MyinfoComponent} from './main/myinfo/myinfo.component';
import {FaqComponent} from './main/faq/faq.component';
import {LoginComponent} from './main/login/login.component';
import {SigninComponent} from './main/signin/signin.component';

// Mainpage
export const ROUTES: Routes = [
  // Main redirect
  {path: '', pathMatch: 'full', redirectTo: 'main'},

  // App views
  {
    path: 'main', component: MainLayoutComponent,
    children: [
      {path: '', component: HomeComponent}
    ]
  },

  {
    path: 'reservation', component: DetailLayoutComponent,
    children: [
      {path: '', component: ReservationComponent}
    ]
  },

  {
    path: 'tutor', component: DetailLayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'list'},
      {path: 'list', component: TutorListComponent},
      {path: 'detail', component: TutorDetailComponent}
    ]
  },

  {
    path: 'mypage', component: DetailLayoutComponent,
    children: [
      {path: '', component: MypageComponent}
    ]
  },

  {
    path: 'myinfo', component: DetailLayoutComponent,
    children: [
      {path: '', component: MyinfoComponent}
    ]
  },

  {
    path: 'faq', component: DetailLayoutComponent,
    children: [
      {path: '', component: FaqComponent}
    ]
  },

  {
    path: 'login', component: DetailLayoutComponent,
    children: [
      {path: '', component: LoginComponent}
    ]
  },

  {
    path: 'siginin', component: DetailLayoutComponent,
    children: [
      {path: '', component: SigninComponent}
    ]
  },



    // lazy loading menu
    /*{path: 'main', loadChildren : './main/mainpage.module#MainpageModule', canActivateChild: [SellerGuard]},*/
    /*{path: 'product', loadChildren : './product/product.module#ProductModule', data: { preload: true }},*/

    /*{
        path: 'member', component: BasicLayoutComponent, canActivateChild: [SellerGuard],
        children: [
            {path: 'seller', component: SellerConfirmComponent, canActivate: [SellerGuard]},
            {path: 'seller_manage', component: SellerManageComponent, canActivate: [SellerManageGuard]},
            {path: 'roadshop', component: RoadshopRequestComponent, canActivate: [RoadshopGuard]},
            {path: 'roadshop_write', component: RoadshopWriteComponent, canActivate: [RoadshopGuard, RoadshopWriteGuard]}
        ]
    },*/

    // Handle all other routes
    {path: '**',  redirectTo: '/main/index'}
];
