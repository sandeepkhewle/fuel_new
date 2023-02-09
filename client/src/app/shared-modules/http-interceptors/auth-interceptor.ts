import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  // intercept(req: HttpRequest<any>, next: HttpHandler) {

  //   // Get the auth token from the service.
  //   const authToken = this.authService.loadToken();
  //   const authReq = req.clone({
  //     setHeaders: { Authorization: 'JWT ' + authToken }
  //   });

  //   // modifing header for API  call.
  //     return next.handle(authReq);
  // }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `${this.authService.loadToken()}`
      }
    });

    return next.handle(request);
  }
}
