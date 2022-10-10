import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AddHttpParams } from '@shared/add-http-params';
import { Loading } from '@shared/models/loading.model';
import { LoadingService } from '@shared/services/loading.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { CommentsCreated } from './comments-created.model';
import { Comments } from './comments.model';

@Injectable()
export class CommentsService extends LoadingService {

  updatePosts = new EventEmitter<void>();

  constructor(private http: HttpClient) {
    super();
  }

  get url(): string {
    return environment.api;
  }

  getByPost(id: string, filter: any, loading?: Loading): Observable<Comments> {
    this.startLoading(loading);
    const params = new AddHttpParams(filter).createParams();
    return this.http.get<Comments>(`${this.url}/post/${id}/comment`, { params })
      .pipe(this.configMapAndLoading(loading));
  }

  create(data: any, loading?: Loading): Observable<CommentsCreated> {
    this.startLoading(loading);
    return this.http.post<CommentsCreated>(`${this.url}/comment/create`, { ...data })
      .pipe(this.configMapAndLoading(loading));
  }

  delete(id?: string, loading?: Loading): Observable<void> {
    this.startLoading(loading);
    return this.http.delete<void>(`${this.url}/comment/${id}`)
      .pipe(this.configMapAndLoading(loading));
  }

}
