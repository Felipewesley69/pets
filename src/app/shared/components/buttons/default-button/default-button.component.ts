import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-default-button',
  template: `
              <button
                (click)="funcao()"
                class="button"
                [disabled]="disabled"
                type="button">
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

  funcao() {
    this.func.emit();
  }

}
