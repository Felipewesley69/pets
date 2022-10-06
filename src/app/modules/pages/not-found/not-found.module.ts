import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { ButtonsModule } from 'src/app/shared/components/buttons/buttons.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule
  ],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent]
})
export class NotFoundModule { }
