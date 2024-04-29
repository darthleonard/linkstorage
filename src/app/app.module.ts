import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { AuthConfig, AuthModule } from '@auth0/auth0-angular';

import { domain, clientId, callbackUri } from './auth.config';

const authConfig: AuthConfig = {
  domain,
  clientId,
  cacheLocation: 'localstorage',
  authorizationParams: {
    redirect_uri: callbackUri,
  },
  useRefreshTokens: true,
  useRefreshTokensFallback: false,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AuthModule.forRoot(authConfig),
    ComponentsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
