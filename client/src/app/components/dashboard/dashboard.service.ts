import { HttpClient } from '@angular/common/http';
import { GlobalApiService } from 'src/app/shared-modules/global-api.service';
import { AuthService } from 'src/app/shared-modules/services/auth.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(    
    private http: HttpClient,
    private globalApiService: GlobalApiService,
    private authService: AuthService) { }

    getDashboardSummary(postObj:any):Observable<any>{
      return this.http.post(this.globalApiService.getApiUrl() + '/admin/summary', postObj)
          .pipe(catchError((e: any) => this.authService.getCheckError(e)));
    }
}
