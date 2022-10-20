import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';
import { OptionDeleteComponent } from './option-delete/option-delete.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule
  ],
  declarations: [
    DefaultButtonComponent,
    SecondaryButtonComponent,
    OptionDeleteComponent
  ],
  exports: [
    DefaultButtonComponent,
    SecondaryButtonComponent,
    OptionDeleteComponent
  ]
})
export class ButtonsModule { }
