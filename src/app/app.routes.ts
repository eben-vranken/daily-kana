import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Signup } from './components/auth/signup/signup';
import { LandingPage } from './components/landing-page/landingpage';
import { Dashboard } from './components/dashboard/dashboard';
import { authGuard, redirectIfAuthenticatedGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
    canActivate: [redirectIfAuthenticatedGuard],
  },

  // Auth
  {
    path: 'login',
    component: Login,
    canActivate: [redirectIfAuthenticatedGuard],
  },
  {
    path: 'signup',
    component: Signup,
    canActivate: [redirectIfAuthenticatedGuard],
  },

  // Protected Dashboard
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },
];
