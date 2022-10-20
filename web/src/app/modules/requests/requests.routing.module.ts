import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './requests.component';

const routes: Routes = [
  {
    path: '',
    component: RequestsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'connections'
      },
      {
        path: 'connections',
        loadChildren: () => import('../../shared/components/connections/connections.module').then(m => m.ConnectionsModule)
      },
      {
        path: 'people-i-follow',
        loadChildren: () => import('../../shared/components/people-i-follow/people-i-follow.module').then(m => m.PeopleIFollowModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResquestsRoutingModule { }
