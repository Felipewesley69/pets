import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { ButtonsModule } from '@shared/components/buttons/buttons.module';
import { UtilService } from '@core/services/util.service';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule
  ],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
  providers: [UtilService]
})
export class NotFoundModule { }
