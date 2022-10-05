import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { ConnectionsComponent } from '../connections/connections.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SideNavComponent,
  ],
  exports: [
    SideNavComponent,
  ]
})
export class SideNavModule { }
