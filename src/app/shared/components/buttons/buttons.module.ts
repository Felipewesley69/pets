import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DefaultButtonComponent,
    SecondaryButtonComponent
  ],
  exports: [
    DefaultButtonComponent,
    SecondaryButtonComponent
  ]
})
export class ButtonsModule { }
