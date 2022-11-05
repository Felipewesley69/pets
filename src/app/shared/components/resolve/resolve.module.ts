import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolveComponent } from './resolve.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResolveComponent],
  exports: [ResolveComponent]
})
export class ResolveModule { }
