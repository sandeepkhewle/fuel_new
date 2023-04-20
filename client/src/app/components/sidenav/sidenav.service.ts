import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GlobalApiService } from '../../shared-modules/global-api.service';
import { AuthService } from '../../shared-modules/services/auth.service'
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor(
    private http: HttpClient,
    private globalApiService: GlobalApiService,
    private authService: AuthService
  ) { }

  

  // for sidenav from database
  getsideNav(): Observable<any> {
    let options = ({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.stringify(localStorage.getItem('token'))
      })
    });

  //   let httpOptions:any;
  //  httpOptions.headers = httpOptions.headers.set('Authorization', JSON.stringify(localStorage.getItem('token')));

    // let options= {
    //   headers: new HttpHeaders().append('Content-Type', 'application/json'),
    //   params: new HttpParams().append('authorization', JSON.stringify(localStorage.getItem('token')))
    // }
    return this.http.post(this.globalApiService.getApiUrl() + '/structure/getSideNav', options)
      .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }

  updateDefaultBranch(postObj:any): Observable<any> {
    return this.http.post(this.globalApiService.getApiUrl() + '/adminUser/updateDefaultSetting', postObj)
      .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }

  
  getCentreBrandData(postObj:any): Observable<any> {
    return this.http.post(this.globalApiService.getApiUrl() + '/adminUser/getCentreBranchList', postObj)
      .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }
}
