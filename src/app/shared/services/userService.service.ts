import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@shared/models/user.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private loggedUserId;

  constructor(private http: HttpClient) { }

  get url(): string {
    return environment.api;
  }

  get userId(): string {
    return this.loggedUserId;
  }

  setId(value) {
    this.loggedUserId = value;
  }

  updateUserId() {
    this.loggedUserId = window.sessionStorage.getItem('token');
  }

  findById(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${id}`);
  }

}
