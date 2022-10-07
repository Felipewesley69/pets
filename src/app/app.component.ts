import { UserServiceService } from './shared/services/userService.service';
import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pets';
  load: boolean = true;
  classLoader: string = '';
  showLoader$: Observable<boolean>;

  constructor(
    private userService: UserServiceService,
    private loadingService: LoadingService,
    router: Router
  ) {
    this.userService.updateUserId();
    this.showLoader$ = this.loadingService.showLoading$;

    router.events.subscribe(event => {
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => this.load = false, 1000);
        // this.load = false;
      }
    });
  }

}
