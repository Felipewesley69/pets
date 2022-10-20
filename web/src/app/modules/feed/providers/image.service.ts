import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Loading } from '@shared/models/loading.model';
import { LoadingService } from '@shared/services/loading.service';
import { Observable } from 'rxjs';

@Injectable()
export class ImageService extends LoadingService {

  updatePosts = new EventEmitter<void>();

  constructor(private http: HttpClient) {
    super();
  }

  api = 'https://thumbsnap.com/api/upload';

  updateImage(media: FormData, loading?: Loading): Observable<any> {
    this.startLoading(loading);
    return this.http.post<any>(`${this.api}`, media, { headers: this.getHeaders() })
      .pipe(this.configMapAndLoading(loading));
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders().append('skip', 'true');
  }

  protected getHeadersMulti(): HttpHeaders {
    return new HttpHeaders({ 'Accept': '*/*' });
  }

}
