import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AddHttpParams } from '@shared/add-http-params';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Post, Posts } from './posts.model';

@Injectable()
export class PostsService {

  updatePosts = new EventEmitter<void>();

  constructor(private http: HttpClient) { }

  get url(): string {
    return environment.api;
  }

  load(filter: any): Observable<Posts> {
    const params = new AddHttpParams(filter).createParams();
    return this.http.get<Posts>(`${this.url}/post`, { params });
  }

  creat(data: Post): Observable<Post> {
    return this.http.post<Post>(`${this.url}/post/create`, { ...data })
  }

  delete(id?: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/post/${id}`);
  }

}
