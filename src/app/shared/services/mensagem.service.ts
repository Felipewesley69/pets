import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

enum TipoMensagem {
  ERRO = 'error',
  SUCESSO = 'success',
  ALERTA = 'warning',
}

export interface Mensagem {
  titulo: string;
  mensagem: string;
  tipo?: TipoMensagem;
}

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor() { }

  mensagem(alerta: Mensagem) {
    Swal.fire(alerta.titulo, alerta.mensagem, alerta.tipo);
  }

  sucesso(mensagem: string = 'Operação realizada com sucesso', titulo?: string) {
    if(!titulo) titulo = 'Sucesso!';
    this.mensagem({titulo, mensagem, tipo: TipoMensagem.SUCESSO});
  }

  error(mensagem: string = 'Não foi possivel realizar operação', titulo?: string) {
    if(!titulo) titulo = 'Atenção!';
    this.mensagem({titulo, mensagem, tipo: TipoMensagem.ERRO});
  }

  alerta(mensagem: string = 'Não foi possivel realizar operação', titulo?: string) {
    if(!titulo) titulo = 'Atenção!';
    this.mensagem({titulo, mensagem, tipo: TipoMensagem.ALERTA});
  }
  
}
