import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests.component';
import { ResquestsRoutingModule } from './requests.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ResquestsRoutingModule
  ],
  declarations: [RequestsComponent]
})
export class RequestsModule { }
