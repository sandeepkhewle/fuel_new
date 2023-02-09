import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GlobalApiService } from '../../../shared-modules/global-api.service';
import { AuthService } from '../../../shared-modules/services/auth.service'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(
    private http: HttpClient,
    private globalApiService: GlobalApiService,
    private authService: AuthService) { }

       // to get All ther member as per the filters obj
       getData(postObj:any): Observable<any> {
        return this.http.post(this.globalApiService.getApiUrl() + '/structure/table', postObj)
            .pipe(catchError((e: any) => this.authService.getCheckError(e)));
    }

    columnsData(postObj:any):Observable<any>{
        return this.http.post(this.globalApiService.getApiUrl() + '/adminUser/getColumnMapping', postObj)
            .pipe(catchError((e: any) => this.authService.getCheckError(e)));
    }
}
