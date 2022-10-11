import {
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { token } from 'token';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {

    if (req.headers.get('skip') !== undefined && req.headers.get('skip') !== null){
      req = req.clone({
        headers: req.headers.delete('skip').set('Accept', '*/*')
      });
      return next.handle(req);
    }

    req = req.clone({
      headers: req.headers.set('app-id', token)
    });
    return next.handle(req);
  }
}
