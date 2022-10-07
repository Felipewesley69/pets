import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AddHttpParams } from '@shared/add-http-params';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { CommentsCreated } from './comments-created.model';
import { Comments } from './comments.model';

@Injectable()
export class CommentsService {

  updatePosts = new EventEmitter<void>();

  constructor(private http: HttpClient) { }

  get url(): string {
    return environment.api;
  }

  getByPost(id: string, filter: any): Observable<Comments> {
    const params = new AddHttpParams(filter).createParams();
    return this.http.get<Comments>(`${this.url}/post/${id}/comment`, { params });
  }

  create(data: any): Observable<CommentsCreated> {
    return this.http.post<CommentsCreated>(`${this.url}/comment/create`, { ...data });
  }

  delete(id?: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/comment/${id}`);
  }

}
