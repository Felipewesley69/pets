import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleIFollowRoutingModule } from './people-i-follow.routing.module';
import { PeopleIFollowComponent } from './people-i-follow.component';

@NgModule({
  imports: [
    CommonModule,
    PeopleIFollowRoutingModule,
    RouterModule
  ],
  declarations: [
    PeopleIFollowComponent
  ],
  exports: [
    PeopleIFollowComponent
  ]
})
export class PeopleIFollowModule { }
