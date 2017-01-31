import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import {LoginPageComponent} from "./pages/login/login.page.component";
import {DashboardPageComponent} from "./pages/dashboard/dashboard.page.component";
import {LogoutPageComponent} from "./pages/logout/logout.page.component";

export const routes: Route[] = [
  { path: '', component: LoginPageComponent },
  { path:'dashboard',component: DashboardPageComponent, canActivate: ['canActivateForLoggedIn']},
  { path:'logout',component: LogoutPageComponent, canActivate: ['canActivateForLoggedIn']}
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];
