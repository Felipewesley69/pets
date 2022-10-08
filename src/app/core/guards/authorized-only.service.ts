import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServiceService } from '@shared/services/userService.service';

@Injectable()
export class AuthorizedOnlyService implements CanActivate {

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) { }

  canActivate() {
    const isAuthenticated: boolean = Boolean(this.userService.userId);

    if (!isAuthenticated) this.router.navigate(['/login']);

    return isAuthenticated;
  }
}
