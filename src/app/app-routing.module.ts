import { HeaderComponent } from './modules/layout/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';
import { AuthorizedOnlyService } from '@core/guards/authorized-only.service';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'feed',
        loadChildren: () => import('./modules/feed/feed.module').then(m => m.FeedModule),
        canActivate: [AuthorizedOnlyService]
      },
      {
        path: 'services',
        loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule),
        canActivate: [AuthorizedOnlyService]
      },
      {
        path: 'requests',
        loadChildren: () => import('./modules/requests/requests.module').then(m => m.RequestsModule),
        canActivate: [AuthorizedOnlyService]
      },
      {
        path: 'about',
        loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule),
        canActivate: [AuthorizedOnlyService]
      },
      {
        path: 'profile',
        loadChildren: () => import('./modules/pages/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthorizedOnlyService]
      },
      {
        path: '**', component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
