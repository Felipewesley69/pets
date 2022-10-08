import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card-user.component';
import { UtilService } from '@core/services/util.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardUserComponent
  ],
  exports: [
    CardUserComponent
  ],
  providers: [
    UtilService
  ]
})
export class CardUsuarioModule { }
