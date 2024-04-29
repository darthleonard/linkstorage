import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { App } from '@capacitor/app';
import { callbackUri } from './auth.config';
import { Browser } from '@capacitor/browser';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly auth: AuthService,
    private readonly ngZone: NgZone
  ) {}

  ngOnInit(): void {
    App.addListener('appUrlOpen', ({ url }) => {
      this.ngZone.run(() => {
        if (url?.startsWith(callbackUri)) {
          if (
            url.includes('state=') &&
            (url.includes('error=') || url.includes('code='))
          ) {
            this.auth
              .handleRedirectCallback(url)
              .pipe(mergeMap(() => Browser.close()))
              .subscribe();
          } else {
            Browser.close();
          }
        }
      });
    });
  }
}
