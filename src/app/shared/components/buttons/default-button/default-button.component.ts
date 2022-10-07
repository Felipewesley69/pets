import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-button',
  template: `
              <button
                (click)="funcao()"
                class="button"
                [disabled]="disabled"
                [type]="type">
                <i [class]="icon"></i>
                {{ label }}
              </button>
  `,
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent {

  @Output() func = new EventEmitter();
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() type: string = 'button';

  funcao() {
    this.func.emit();
  }

}
