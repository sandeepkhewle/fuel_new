import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalApiService } from 'src/app/shared-modules/global-api.service';
import { AuthService } from 'src/app/shared-modules/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor(
    private http: HttpClient,
    private globalApiService: GlobalApiService,
    private authService: AuthService
  ) { }

  sendInvoice(postObj:any):Observable<any>{
    return this.http.post(this.globalApiService.getApiUrl() + '/admin/sendInvoice', postObj)
        .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }
}
