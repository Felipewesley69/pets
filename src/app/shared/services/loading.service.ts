import { Injectable } from '@angular/core';
import { configMap } from '@shared/config-map';
import { Loading } from '@shared/models/loading.model';
import { MonoTypeOperatorFunction, Observable, pipe, UnaryFunction } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  protected startLoading(loading: Loading): void {
    loading = this.handlerLoading(loading);
    if (loading.startLoading) loading.load = true;
  }
  
  protected stopLoading(loading: Loading): MonoTypeOperatorFunction<any> {
    loading = this.handlerLoading(loading);
    return loading.stopLoading ? finalize(() => loading.load = false) : pipe();
  }

  protected configMapAndLoading(loading: Loading): UnaryFunction<Observable<any>, Observable<any>> {
    return pipe(
      configMap(),
      this.stopLoading(loading)
    );
  }

  private handlerLoading(loading: Loading): Loading {
    if(loading == null || loading === undefined)  loading = { startLoading: false, stopLoading: false };
    if(loading.startLoading === undefined) loading.startLoading = false;
    if(loading.stopLoading === undefined) loading.stopLoading = false;
    return loading;
  }

}
