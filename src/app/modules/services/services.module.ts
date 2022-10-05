import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services.routing.module';
import { CardUsuarioModule } from 'src/app/shared/components/card-usuario/card-usuario.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    CardUsuarioModule
  ],
  declarations: [ServicesComponent]
})
export class ServicesModule { }
