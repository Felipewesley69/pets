import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, Users } from '@shared/models/user.model';
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

  load(): Observable<Users> {
    return this.http.get<Users>(`${this.url}/user`);
  }

  findById(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${id}`);
  }

  update(id: string, entity): Observable<User> {
    return this.http.put<User>(`${this.url}/user/${id}`, { ...entity });
  }

  save(entity): Observable<User> {
    return this.http.put<User>(`${this.url}/user/create`, { ...entity });
  }

}
