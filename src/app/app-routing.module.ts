import { HeaderComponent } from './modules/layout/header/header.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';

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
        loadChildren: () => import('./modules/feed/feed.module').then(m => m.FeedModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule)
      },
      {
        path: 'requests',
        loadChildren: () => import('./modules/requests/requests.module').then(m => m.RequestsModule)
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
