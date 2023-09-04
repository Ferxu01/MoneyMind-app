import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { map } from 'rxjs/operators';

export const logoutActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isLogged().pipe(
    map(resp => {
      if (resp === false) {
        return true;
      } else {
        return router.createUrlTree(['/home']);
      }
    })
  )
};
