import { MensagemService } from './../../services/mensagem.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { UserServiceService } from '@shared/services/userService.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UtilService } from '@core/services/util.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.scss']
})
export class ModalUserComponent implements OnInit {

  @ViewChild('modal') modal: ModalDirective;
  @Output() updateCardProfile = new EventEmitter<string>();

  id: string;
  form: FormGroup;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private mensagemService: MensagemService,
    private userService: UserServiceService,
    private utilService: UtilService
  ) {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      gender: [null],
      email: [null],
      dateOfBirth: [null],
      phone: [null],
      picture: [null],
      location: this.fb.group({
        street: [null],
        city: [null],
        state: [null],
        country: [null]
      })
    });
  }

  ngOnInit() {
  }

  open(id?: string) {
    if (id) this.popForm(id);
    this.modal.show();
  }

  check(): void {
    if (this.form.invalid) return this.mensagemService.alerta('Formulário inválido!');
    this.isEdit ? this.update() : this.save();
  }

  save(): void {
    this.userService.save(this.form.getRawValue()).subscribe(() => {
      this.mensagemService.popUpSuccess();
      this.close();
    });
  }

  update(): void {
    this.userService.update(this.id, this.form.getRawValue()).subscribe(res => {
      this.mensagemService.popUpSuccess();
      this.updateCardProfile.emit(res.id);
      this.utilService.setUserSessionStorage(res);
      this.close();
    });
  }

  popForm(id: string): void {
    this.isEdit = true;
    this.id = id;

    this.userService.findById(id).subscribe(res => this.form.patchValue({ ...res }));
  }

  close() {
    this.modal.hide();
    this.isEdit = false;
  }

}
