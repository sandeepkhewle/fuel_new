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
export class TrendsService {

  constructor(    
    private http: HttpClient,
    private globalApiService: GlobalApiService,
    private authService: AuthService
  ) { }

    createTrendsFun(postObj:any):Observable<any>{
      return this.http.post(this.globalApiService.getApiUrl() + '/trend/create', postObj)
          .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }
  updateTrendsFun(postObj:any):Observable<any>{
    return this.http.post(this.globalApiService.getApiUrl() + '/trend/update', postObj)
        .pipe(catchError((e: any) => this.authService.getCheckError(e)));
}

deleteTrendsFun(postObj:any):Observable<any>{
  return this.http.post(this.globalApiService.getApiUrl() + '/trend/delete', postObj)
      .pipe(catchError((e: any) => this.authService.getCheckError(e)));
}
}
