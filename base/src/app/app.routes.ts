import {Routes} from '@angular/router';

// Base
import {BasicLayoutComponent} from './core/layouts/basicLayout.component';
import {MainpageComponent} from './main/home/mainpage.component';

import {TimetableComponent} from './reservation/timetable.component';

// Mainpage
export const ROUTES: Routes = [
    // Main redirect
    {path: '', pathMatch: 'full', redirectTo: 'main'},

    // App views
    {
      path: 'main', component: BasicLayoutComponent,
      children: [
        {path: '', pathMatch: 'full', redirectTo: 'index'},
        {path: 'index', component: MainpageComponent}
      ]
    },
    
    {
	    path: 'reservation', component: BasicLayoutComponent
	    children: [
	        {path: 'timetable', component: TimetableComponent}
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
