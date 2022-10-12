import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-option-delete',
  template: `
              <div class="btn-group options" dropdown>
                <i id="button-animated" type="button" dropdownToggle class="fas fa-ellipsis-v"
                 aria-controls="dropdown-animated"></i>
                 <ul id="dropdown-animated" *dropdownMenu class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="button-animated">
                    <li role="menuitem">
                      <a class="dropdown-item" (click)="acao()">Excluir</a>
                    </li>
                 </ul>
              </div>
  `,
  styleUrls: ['./option-delete.component.scss']
})
export class OptionDeleteComponent {
  @Output() func = new EventEmitter();

  acao() {
    Swal.fire({
      title: 'Você tem certeza que deseja excluir esse registro?',
      text: 'Isso será permanente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, excluir!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.func.emit(null);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Exluído com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }
}
