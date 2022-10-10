import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AddHttpParams } from '@shared/add-http-params';
import { Loading } from '@shared/models/loading.model';
import { LoadingService } from '@shared/services/loading.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Post, Posts } from './posts.model';

@Injectable()
export class PostsService extends LoadingService {

  updatePosts = new EventEmitter<void>();

  constructor(private http: HttpClient) {
    super();
  }

  get url(): string {
    return environment.api;
  }

  load(filter: any, loading?: Loading): Observable<Posts> {
    this.startLoading(loading);
    const params = new AddHttpParams(filter).createParams();
    return this.http.get<Posts>(`${this.url}/post`, { params })
      .pipe(this.configMapAndLoading(loading));
  }

  loadById(id: string, loading?: Loading): Observable<Post> {
    this.startLoading(loading);
    return this.http.get<Post>(`${this.url}/post/${id}`)
      .pipe(this.configMapAndLoading(loading));
  }

  loadByIdUser(id: string, filter: any, loading?: Loading): Observable<Posts> {
    this.startLoading(loading);
    const params = new AddHttpParams(filter).createParams();
    return this.http.get<Posts>(`${this.url}/user/${id}/post`, { params })
      .pipe(this.configMapAndLoading(loading));
  }

  creat(data: Post): Observable<Post> {
    return this.http.post<Post>(`${this.url}/post/create`, { ...data })
  }

  delete(id?: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/post/${id}`);
  }

}
