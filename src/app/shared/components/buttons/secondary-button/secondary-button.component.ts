import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
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
  styleUrls: ['./secondary-button.component.scss']
})
export class SecondaryButtonComponent {

  @Output() func = new EventEmitter();
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';

  funcao() {
    this.func.emit();
  }

}
