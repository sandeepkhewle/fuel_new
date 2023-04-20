import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { GlobalApiService } from 'src/app/shared-modules/global-api.service';
import { AuthService } from 'src/app/shared-modules/services/auth.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
      private http: HttpClient,
      private globalApiService: GlobalApiService,
      private authService: AuthService
  ) { }

  // for login the User
  loginUser(postObj:any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.globalApiService.getApiUrl() + '/web/adminLogin', postObj, {headers})
    .pipe(map(res => res))
    .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }
}
