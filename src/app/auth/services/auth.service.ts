import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged: boolean = false;
  loginChange$ = new Subject<boolean>();

  constructor() { }

  isLogged(): Observable<boolean> {
    if (this.logged && localStorage.getItem('token')) {
      return of(true);
    } else if (!this.logged && !localStorage.getItem('token')) {
      return of(false);
    } else if (!this.logged && localStorage.getItem('token')) {
      this.logged = true;
      this.loginChange$.next(true);
      return of(true);
    }

    return of(false);
  }
}
