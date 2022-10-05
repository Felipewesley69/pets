import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services.routing.module';
import { CardUsuarioModule } from 'src/app/shared/components/card-user/card-user.module';
import { ButtonsModule } from 'src/app/shared/components/buttons/buttons.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    CardUsuarioModule,
    ButtonsModule
  ],
  declarations: [ServicesComponent]
})
export class ServicesModule { }
