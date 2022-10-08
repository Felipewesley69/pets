import { NgModule, Optional, SkipSelf } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading-interceptor';
import { LoadingService } from './services/loading.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { RequestInterceptor } from './interceptors/requests.interceptor';
import { AuthorizedOnlyService } from './guards/authorized-only.service';

@NgModule({
    imports: [
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        },
        LoadingService,
        AuthorizedOnlyService
    ],
    declarations: [
    ],
    exports: [
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
