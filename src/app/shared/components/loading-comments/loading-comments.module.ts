import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingCommentsComponent } from './loading-comments.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingCommentsComponent],
  exports: [LoadingCommentsComponent]
})
export class LoadingCommentsModule { }
