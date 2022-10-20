import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [RequestsComponent],
  exports: [RequestsComponent]
})
export class RequestsModule { }
