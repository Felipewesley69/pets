import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests.component';
import { ResquestsRoutingModule } from './requests.routing.module';
import { SideNavModule } from 'src/app/shared/components/side-nav/side-nav.module';

@NgModule({
  imports: [
    CommonModule,
    ResquestsRoutingModule,
    SideNavModule
  ],
  declarations: [RequestsComponent]
})
export class RequestsModule { }
