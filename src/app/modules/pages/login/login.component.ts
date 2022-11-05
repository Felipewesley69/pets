import { MensagemService } from '@shared/services/mensagem.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '@shared/services/userService.service';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  users: User[] = [];

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
    this.loadUsers();
  }

  login(): void {
    if (this.checkLoginData() && this.checkUser()) {
      window.sessionStorage.setItem('token', this.form.get('userName').value);
      this.userService.updateUserId();
      this.setUserSessionStorage();
    } else {
      this.mensagemService.error('Usuario ou senha incorretos!');
    }
  }

  loadUsers(): void {
    this.userService.load().subscribe(res => this.users = res.data);
  }

  setUserSessionStorage(): void {
    this.userService.findById(this.username).subscribe(res => {
      window.sessionStorage.setItem('user', JSON.stringify(res));
      this.mensagemService.popUpSuccess('Seja bem-vindo!');
      this.route.navigate(['/feed']);
    });
  }

  checkUser = (): boolean => this.users.some(u => u.id == this.username);

  checkLoginData = (): boolean => this.username === this.password;

  get username(): string {
    return this.form.get('userName').value;
  }

  get password(): string {
    return this.form.get('password').value;
  }

}
