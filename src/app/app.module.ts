import { LoadingGeneralComponent } from './shared/components/loading-general/loading-general.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutModule } from './modules/layout/layout.module';
import { registerLocaleData, HashLocationStrategy, LocationStrategy } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ResolveModule } from './shared/components/resolve/resolve.module';
import { NotFoundModule } from './modules/pages/not-found/not-found.module';
import { LoginModule } from './modules/pages/login/login.module';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    LoadingGeneralComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    CoreModule,
    ResolveModule,
    NotFoundModule,
    LoginModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt'
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
