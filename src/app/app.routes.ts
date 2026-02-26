import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Signup } from './components/auth/signup/signup';
import { LandingPage } from './components/landing-page/landingpage';
import { Dashboard } from './components/dashboard/dashboard';
import { TermsAndConditions } from './components/terms-and-conditions/terms-and-conditions';
import { Chat } from './components/chat/chat';
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
  {
    path: 'terms-and-conditions',
    component: TermsAndConditions,
  },

  // Protected Dashboard
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },
  {
    path: 'chat',
    component: Chat,
    canActivate: [authGuard],
  },
];
