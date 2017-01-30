import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import {LoginPageComponent} from "./pages/login/login.page.component";
import {DashboardPageComponent} from "./pages/dashboard/dashboard.component";

export const routes: Route[] = [
  { path: '', component: LoginPageComponent },
  { path:'dashboard',component: DashboardPageComponent, canActivate: ['canActivateForLoggedIn']}
];

export const ROUTES_PROVIDERS = [{
  provide: 'canActivateForLoggedIn',
  useValue: () => !! Meteor.userId()
}];
