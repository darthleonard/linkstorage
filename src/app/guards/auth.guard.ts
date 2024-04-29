import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  return inject(AuthService).isAuthenticated$.pipe(
    tap(isAuthenticated => {
      if(!isAuthenticated) {
        router.navigate(['login']);
      }
    }));
};
