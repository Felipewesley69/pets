import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingProfileComponent } from './loading-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingProfileComponent],
  exports: [LoadingProfileComponent]
})
export class LoadingProfileModule { }
