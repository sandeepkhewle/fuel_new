import { HttpClient } from '@angular/common/http';
import { GlobalApiService } from 'src/app/shared-modules/global-api.service';
import { AuthService } from 'src/app/shared-modules/services/auth.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(    
    private http: HttpClient,
    private globalApiService: GlobalApiService,
    private authService: AuthService
  ) { }

  
  getAllPlans(postObj:any):Observable<any>{
    return this.http.post(this.globalApiService.getApiUrl() + '/admin/getPlans', postObj)
        .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }


  assignPlanToMember(postObj:any):Observable<any>{
    return this.http.post(this.globalApiService.getApiUrl() + '/admin/assignPlanManually', postObj)
        .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }
}
