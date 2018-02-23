import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/AuthService/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      console.log('AUTH GUARD PASSED');
      return true;
    } else {
      console.log('BLOCKED BY AUTH GUARD');
      this.router.navigate(['/']);
      return false;
    }
  }
}