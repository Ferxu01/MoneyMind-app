import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { map } from 'rxjs/operators';

export const loginActivateGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLogged().pipe(
    map(resp => {
      console.log(resp);

      if (resp === true) {
        return true;
      } else if (resp === false && localStorage.getItem('token')) {
        return true;
      } else {
        return router.createUrlTree(['/auth/login']);
      }
    })
  );
};
