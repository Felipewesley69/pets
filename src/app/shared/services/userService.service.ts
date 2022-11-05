import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loading } from '@shared/models/loading.model';
import { User, Users } from '@shared/models/user.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService extends LoadingService {

  private loggedUserId;

  constructor(private http: HttpClient) {
    super();
  }

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

  findById(id: string, loading?: Loading): Observable<User> {
    this.startLoading(loading);
    return this.http.get<User>(`${this.url}/user/${id}`)
      .pipe(this.configMapAndLoading(loading));
  }

  update(id: string, entity): Observable<User> {
    return this.http.put<User>(`${this.url}/user/${id}`, { ...entity });
  }

  save(entity): Observable<User> {
    return this.http.put<User>(`${this.url}/user/create`, { ...entity });
  }

}
