import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUsuarioComponent } from './card-usuario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardUsuarioComponent
  ],
  exports: [
    CardUsuarioComponent
  ]
})
export class CardUsuarioModule { }
