import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    {
      provide: BsDropdownConfig, useValue: {
        isAnimated: true,
        autoClose: true
      }
    }
  ]
})
export class LayoutModule { }
