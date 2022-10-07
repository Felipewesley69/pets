import { MensagemService } from '@shared/services/mensagem.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '@shared/services/userService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private userService: UserServiceService,
    private mensagemService: MensagemService
  ) {
    this.form = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  login(): void {
    if (this.checkLoginData()) {
      window.sessionStorage.setItem('token', this.form.get('userName').value);
      this.userService.updateUserId();
      this.route.navigate(['/feed']);
      this.mensagemService.sucesso('Seja bem-vindo!');
    } else {
      this.mensagemService.error('Usuario ou senha incorretos!');
    }
  }

  checkLoginData = () => this.form.get('userName').value == this.form.get('password').value;

}
