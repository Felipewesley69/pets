import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor() { }

  sucesso(message: string = 'Operação realizada com sucesso', title?: string) {
    Swal.fire(title || 'Sucesso!', message, 'success');
  }

  error(message: string = 'Não foi possivel realizar operação', title?: string) {
    Swal.fire(title || 'Atenção!', message, 'error');
  }

  alerta(message: string = 'Não foi possivel realizar operação', title?: string) {
    Swal.fire(title || 'Atenção!', message, 'warning');
  }

  popUpSuccess(title?: string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: title || 'Sucesso!',
      showConfirmButton: false,
      timer: 1500
    });
  }

}
