import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishDatePipe } from './publish-date.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PublishDatePipe
  ],
  exports: [
    PublishDatePipe
  ]
})
export class PublishDatePipeModule { }
