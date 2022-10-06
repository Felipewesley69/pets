import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'feed'
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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
