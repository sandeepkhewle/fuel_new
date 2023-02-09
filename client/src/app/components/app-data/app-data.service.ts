import { Injectable } from '@angular/core';
import { GlobalApiService } from 'src/app/shared-modules/global-api.service';
import { AuthService } from 'src/app/shared-modules/services/auth.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(    
    private http: HttpClient,
    private globalApiService: GlobalApiService,
    private authService: AuthService
  ) { }

  updateAppDataFun(postObj:any):Observable<any>{
    return this.http.post(this.globalApiService.getApiUrl() + '/admin/updateAppData', postObj)
        .pipe(catchError((e: any) => this.authService.getCheckError(e)));
}

getAppDataFun(postObj:any):Observable<any>{
  return this.http.post(this.globalApiService.getApiUrl() + '/admin/getAppData', postObj)
      .pipe(catchError((e: any) => this.authService.getCheckError(e)));
}
}
