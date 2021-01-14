import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Auth Intercept Provider')
    console.log(request.url)
    const authToken= "hggb5fggwd22dd"
    const authRequest = request.clone({
      setHeaders: {Authorization: authToken}
    });
    return next.handle(authRequest);
  }
}
