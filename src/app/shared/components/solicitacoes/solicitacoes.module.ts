import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitacoesComponent } from './solicitacoes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SolicitacoesComponent],
  exports: [SolicitacoesComponent]
})
export class SolicitacoesModule { }
