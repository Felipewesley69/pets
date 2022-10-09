import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserProfileComponent } from './card-user-profile.component';
import { UtilService } from '@core/services/util.service';
import { ModalUserModule } from '../modal-user/modal-user.module';

@NgModule({
  imports: [
    CommonModule,
    ModalUserModule
  ],
  declarations: [CardUserProfileComponent],
  exports: [CardUserProfileComponent],
  providers: [
    UtilService
  ]
})
export class CardUserProfileModule { }
