import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionsComponent } from './connections.component';
import { ConnectionsRoutingModule } from './connections.routing.module';
import { ButtonsModule } from '../buttons/buttons.module';

@NgModule({
  imports: [
    CommonModule,
    ConnectionsRoutingModule,
    RouterModule,
    ButtonsModule
  ],
  declarations: [
    ConnectionsComponent
  ],
  exports: [
    ConnectionsComponent
  ]
})
export class ConnectionsModule { }
