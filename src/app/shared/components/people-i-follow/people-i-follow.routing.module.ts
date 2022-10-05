import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleIFollowComponent } from 'src/app/shared/components/people-i-follow/people-i-follow.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleIFollowComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleIFollowRoutingModule { }
