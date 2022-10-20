import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUserComponent } from './modal-user.component';
import { ButtonsModule } from '../buttons/buttons.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UtilService } from '@core/services/util.service';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ModalUserComponent],
  exports: [ModalUserComponent],
  providers: [
    UtilService
  ]
})
export class ModalUserModule { }
