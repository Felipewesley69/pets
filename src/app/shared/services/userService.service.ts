import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@shared/models/user.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private loggedUserId = '60d0fe4f5311236168a109cd';

  constructor(private http: HttpClient) { }

  get url(): string {
    return environment.api;
  }

  get userId(): string {
    return this.loggedUserId;
  }

  findById(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${id}`);
  }

}
