import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const {
    data: { user },
  } = await authService.supabase.auth.getUser();

  if (user) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

export const redirectIfAuthenticatedGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const {
    data: { user },
  } = await authService.supabase.auth.getUser();

  if (user) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
